const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("../models");
const qs = require("querystring");
const { Op } = require("sequelize");

const { isLoggedIn } = require("./middlewares");

const {
  User,
  Cloth,
  Image,
  Muffler,
  Outer,
  Pant,
  Shirt,
  Shoe,
  Top,
} = require("../models");
const { findAll } = require("../models/user");

const router = express.Router();

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

router.get("/clothes/store/", isLoggedIn, async (req, res, next) => {
  try {
    let where = { UserId: req.user.id };
    if (req.query.categori) {
      where.categori = req.query.categori;
    }
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const userClothes = await Cloth.findAll({
      where,
      limit: 9,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
          attributes: ["id", "ClothId", "src"],
        },
      ],
    });
    console.log("userClothes", userClothes);

    if (userClothes.length === 0) {
      return res.status(200).json({ items: userClothes });
    }
    if (userClothes.length > 0) {
      let nextCursor = userClothes[userClothes.length - 1].dataValues.id;
      let userClothesData = userClothes.map((item) => item.dataValues);
      let userClothesWithCursor = {
        items: userClothesData,
        nextCursor: nextCursor,
      };
      if (req.query.deviceType === "desktop") {
        return res.status(200).json(userClothes);
      } else if (req.query.deviceType === "phone") {
        return res.status(200).json(userClothesWithCursor);
      }
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 처음 store 페이지 라우팅 될 때
// 총 길이와 함꼐, 9개의 데이터를 건내주어야 한다.
// 전체데이터
router.get("/clothes/", isLoggedIn, async (req, res, next) => {
  try {
    const clothes = await Cloth.findAll({
      where: { UserId: req.user.id },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
          attributes: ["id", "ClothId", "src"],
        },
      ],
    });
    const lastClothes = await Cloth.findAll({
      where: {
        UserId: req.user.id,
        purchaseDay: {
          [Op.lt]: new Date(currentDate.getFullYear(), currentMonth, 1),
        },
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
          attributes: ["id", "ClothId", "src"],
        },
      ],
    });

    let filterObj = {};
    let lastFilterObj = {};
    clothes.forEach((cloth) => {
      if (filterObj[cloth.dataValues.categori] === undefined) {
        filterObj[cloth.dataValues.categori] = 1;
      } else {
        filterObj[cloth.dataValues.categori]++;
      }
    });
    lastClothes.forEach((cloth) => {
      if (lastFilterObj[cloth.dataValues.categori] === undefined) {
        lastFilterObj[cloth.dataValues.categori] = 1;
      } else {
        lastFilterObj[cloth.dataValues.categori]++;
      }
    });

    let CurrentPrice = clothes.reduce((acc, crr, idx) => acc + crr.price, 0);
    let LastPrice = lastClothes.reduce((acc, crr, idx) => acc + crr.price, 0);

    const result = {
      items: clothes.slice(0, 9), // 9개
      total: clothes.length, // clothes 는 전체 데이터
      lastTotal: lastClothes.length === 0 ? clothes.length : lastClothes.length,
      price: CurrentPrice,
      lastPrice: lastClothes.length === 0 ? CurrentPrice : LastPrice,
      categori: filterObj,
      lastCategori:
        Object.keys(lastFilterObj).length === 0 ? filterObj : lastFilterObj,
      standardDate: `${currentDate.getFullYear()}-${currentMonth + 1}`,
      idArray: clothes.map((v) => {
        return { id: v.id, categori: v.categori };
      }),
    };
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /posts/overview
// test
router.get("/overview", isLoggedIn, async (req, res, next) => {
  try {
    const allData = await Cloth.findAll({
      where: { UserId: req.user.id },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
          attributes: ["id", "ClothId", "src"],
        },
      ],
    });
    if (!allData) return res.status(400).send("데이터가 존재하지 않습니다.");
    let categoriObj = {};
    allData.forEach((item) => {
      if (categoriObj[item.dataValues.categori] === undefined) {
        categoriObj[item.dataValues.categori] = 1;
      } else {
        categoriObj[item.dataValues.categori]++;
      }
    });
    const copyAllData = [...allData];
    copyAllData.sort(
      (a, b) => b.dataValues.purchaseDay - a.dataValues.purchaseDay
    );

    const last5Data = allData.slice(0, 5); // 최신 저장한 5개의 데이터 [{item},{item},..]
    const totalData = allData.length; // 총 갯수
    const totalPrice = allData.reduce((acc, crr, idx) => acc + crr.price, 0); // 원래라면 defaultValue 를 거쳐야 하는데.. 일단 해보자
    const currentYearPrice = allData
      .filter(
        (item) =>
          new Date(`${currentYear}-01-01`) <= item.dataValues.purchaseDay
      )
      .reduce((acc, crr, idx) => acc + crr.price, 0);
    const oldData = copyAllData.pop();
    const result = {
      lastDatas: last5Data,
      totalNumber: totalData,
      totalPrice: totalPrice,
      currentYearPrice: currentYearPrice,
      theOldestData: oldData,
      categori: categoriObj,
    };
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /posts/clothes/search?searchWord
// test
router.get("/clothes/search/", isLoggedIn, async (req, res, next) => {
  try {
    let searchWord = qs.unescape(req.query.searchWord);

    const searchDatas = await Cloth.findAll({
      where: {
        UserId: req.user.id,
        productName: {
          [Op.like]: "%" + searchWord.toLowerCase() + "%",
        },
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
          attributes: ["id", "ClothId", "src"],
        },
      ],
    });
    if (!searchDatas)
      return res
        .status(200)
        .json({ matchedDatas: [], totalNumber: 0, totalPrice: 0 });
    const copyAllData = [...searchDatas];
    copyAllData.sort(
      (a, b) => b.dataValues.purchaseDay - a.dataValues.purchaseDay
    );

    const totalData = searchDatas.length; // 총 갯수

    const result = {
      matchedDatas: copyAllData,
      totalNumber: totalData,
    };
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
