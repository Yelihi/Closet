const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const { User } = require("../models");

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3065/auth/google/callback",
        passReqToCallback: true,
      },
      // 왜 req 를 추가해야 profile 이 읽히는지 모르겠다...
      async (req, accessToken, refreshToken, profile, done) => {
        console.log("google profile : ", profile);
        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: "google" },
          });
          if (exUser) {
            return done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile?.emails[0].value,
              nickname: profile.displayName,
              snsId: profile.id,
              provider: "google",
              password: "",
              src: "",
            });
            return done(null, newUser);
          }
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
