const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const router = express.Router();

const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { User } = require("../models");

router.get("/", async (req, res, next) => {
  // GET /user
  try {
    if (req.user) {
      console.log(req.user);
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// login

router.post("/login", isNotLoggedIn, (req, res, next) => {
  // "Post /user/login"
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        // include: [
        //   {
        //     model: User,
        //   },
        // ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// logout

router.post("/logout", isLoggedIn, async (req, res, next) => {
  //"post /user/logout"
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    // res.clearCookie();
    res.send("로그아웃 되었습니다.");
  });
});

// signup

router.post("/create", isNotLoggedIn, async (req, res, next) => {
  // "Post /user/create"
  console.log(req.body);
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    const exNickName = await User.findOne({
      where: {
        nickname: req.body.nickname,
      },
    });
    const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    if (req.body.password.length < 8) {
      return res.status(403).send("비밀번호는 8자리 이상이여야 합니다.");
    }
    if (!emailRegExp.test(req.body.email)) {
      return res.status(403).send("이메일 양식에 맞게 작성해주세요");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 13);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
      src: req.body.src,
      snsId: "local",
      provider: "local",
    });
    res.status(200).send("가입해주셔서 감사합니다.");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
