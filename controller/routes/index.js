const router = require("express").Router();
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/dashboard", withAuth, (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn });
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

router.get("/new-customers", withAuth, (req, res) => {
  res.render("new-customers", { loggedIn: req.session.loggedIn });
});
module.exports = router;
