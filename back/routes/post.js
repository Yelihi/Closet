const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("../models");
const dotenv = require("dotenv");
const vision = require("@google-cloud/vision");
const { isLoggedIn } = require("./middlewares");

const { User, Cloth, Image, Muffler, Outer, Pant, Shirt, Shoe, Top } = require("../models");
const getCatagori = require("../core/utils");

const router = express.Router();
dotenv.config();

const client = new vision.ImageAnnotatorClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

try {
  fs.accessSync("uploads");
} catch (err) {
  console.log("upload 폴더가 없으니 생산합니다");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      // 원래 파일에서 원익.jpg 로 오게 되면
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + "_" + new Date().getTime() + ext); // 원익23123.jpg
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20mb
});

// `../uploads/${req.file.filename}`
router.post("/images", isLoggedIn, upload.single("image"), async (req, res, next) => {
  // POST /post/images 파일 한개씩 업로드
  console.log(req.file);
  console.log("client", client);
  try {
    const filename = path.resolve(__dirname, "..", req.file.path);
    console.log("filename", filename);
    const request = {
      image: { content: fs.readFileSync(filename) },
    };
    console.log("request", request);
    const [result] = await client.objectLocalization(request);
    console.log("result", result);
    const objects = result.localizedObjectAnnotations;
    const resArray = [];
    objects.forEach((object) => {
      let obj = { name: object.name, confidence: object.score };
      resArray.push(obj);
    });
    const resultObject = {
      src: req.file.filename,
      visionSearch: resArray,
    };
    res.status(200).json(resultObject);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/clothes", isLoggedIn, upload.none(), async (req, res, next) => {
  // POST /post/clothes
  try {
    const cloth = await Cloth.postClothbyReq(req);
    if (req.body.items.image) {
      if (Array.isArray(req.body.items.image)) {
        const images = await Promise.all(req.body.items.image.map((image) => Image.create({ src: image.src, visionSearch: image.visionSearch })));
        await cloth.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.items.image[0].filename });
        await cloth.addImages(image);
      }
    }
    getCatagori[req.body.items.categori]["post"](cloth, req);
    const reverseId = await Cloth.findOne({
      where: { id: cloth.id },
    });
    res.status(200).json(reverseId);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch("/clothes/:clothId", isLoggedIn, async (req, res, next) => {
  try {
    const cloth = await Cloth.findOne({
      where: { id: req.params.clothId },
      include: [Outer, Top, Pant, Shirt, Shoe, Muffler, Image],
    });
    if (!cloth) {
      return res.status(403).send("의류가 존재하지 않습니다.");
    }
    await Cloth.update(
      {
        productName: req.body.items.productName,
        description: req.body.items.description,
        price: req.body.items.price,
        color: req.body.items.color,
        categori: req.body.items.categori,
        purchaseDay: req.body.items.purchaseDay,
        preference: req.body.items.preference,
        UserId: req.user.id,
      },
      {
        where: { id: req.params.clothId },
      }
    );

    // categori 에 따른 업데이트
    if (req.body.items.categori !== cloth.categori) {
      await db[cloth.categori].destroy({ where: { ClothId: req.params.clothId } });
      getCatagori[req.body.items.categori]["postWithId"](cloth, req);
    } else if (req.body.items.categori === cloth.categori) {
      getCatagori[req.body.items.categori]["update"](req, req.params.clothId);
    }

    // image 업데이트
    if (req.body.items.image) {
      const existingImages = await Image.findAll({ where: { ClothId: req.params.clothId } });
      console.log("existingImages", existingImages);
      const filenameArray = req.body.items.image.map((v) => {
        return { src: v.src, visionSearch: v.visionSearch };
      });
      console.log("filenameArray", filenameArray);
      const filenameArrayKey = filenameArray.map((v) => v.src);

      const imagesToRemove = existingImages.filter((img) => !filenameArrayKey.includes(img.src));
      console.log("imageToRemove", imagesToRemove);
      await Promise.all(imagesToRemove.map((imgSrc) => Image.destroy({ where: { src: imgSrc.dataValues.src } })));

      const imagesToAdd = filenameArray.filter((img) => !existingImages.some((ei) => ei.dataValues.src === img.src));
      console.log("imagesToAdd", imagesToAdd);
      await Promise.all(imagesToAdd.map((image) => Image.create({ src: image.src, visionSearch: image.visionSearch, ClothId: req.params.clothId })));
    }

    res.status(200).send("데이터를 수정하였습니다");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/clothes/:clothId", isLoggedIn, async (req, res, next) => {
  try {
    const cloth = await Cloth.findOne({
      where: { id: req.params.clothId },
      include: [
        Outer,
        Top,
        Pant,
        Shirt,
        Shoe,
        Muffler,
        Image,
        {
          model: User,
          attributes: ["id"],
        },
      ],
    });
    if (!cloth) {
      return res.status(403).send("의류가 존재하지 않습니다.");
    }
    res.status(200).json(cloth);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/clothes/:clothId", isLoggedIn, async (req, res, next) => {
  try {
    const cloth = await Cloth.findOne({
      where: { id: req.params.clothId },
    });
    const year = cloth.dataValues.purchaseDay.getFullYear();
    const month = cloth.dataValues.purchaseDay.getMonth();
    const day = cloth.dataValues.purchaseDay.getDate();
    const id = req.params.clothId;
    const clothData = {
      price: cloth.dataValues.price,
      categori: cloth.dataValues.categori,
      purchaseDay: `${year}-${month + 1}`,
    };
    console.log("clothData", clothData);
    console.log("clothId", id);
    await cloth.destroy();
    res.status(200).json({ clothId: id, clothData: clothData });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
