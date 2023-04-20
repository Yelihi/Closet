const express = require("express");
const passport = require("passport");

const router = express.Router();

// google login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

// google login 성공과 실패 리다이렉트
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/closet/overview",
    failureRedirect: "http://localhost:3000/userlogin",
  })
);

// logout
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    req.logout();
    res.redirect("http://localhost:3000/userlogin");
  });
});

module.exports = router;
