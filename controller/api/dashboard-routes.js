const router = require("express").Router();
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  res.render("dashboard");
});

router.get("/logout", (req, res) => {
  res.render("logout");
});

// router.get("/logout", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
//   res.render("logout");
// });

module.exports = router;
