const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");
const fs = require("fs");

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const googleRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");
const db = require("./models");

const passport = require("passport");
const passportConfig = require("./passport");

// const vision = require("@google-cloud/vision");

const app = express();

dotenv.config();
passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined")); // 배포
  app.use(hpp());
  app.use(helmet());
  app.use(
    cors({
      origin: "http://closet-online.com",
      credentials: true,
    })
  );
} else {
  app.use(morgan("dev")); // 개발
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.use("/", express.static(path.join(__dirname, "uploads")));
console.log(path.join(__dirname, "upload"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: false,
      secure: false,
      domain: process.env.NODE_ENV === "production" && ".closet-online.com",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRouter);
app.use("/auth", googleRouter);
app.use("/post", postRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(80, () => {
  console.log("서버 실행 중!");
});
