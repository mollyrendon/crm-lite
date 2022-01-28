const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.render("logout");
});

router.get("/homepage", (req, res) => {
  res.render("homepage");
});

module.exports = router;
