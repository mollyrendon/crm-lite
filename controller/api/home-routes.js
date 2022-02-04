/*Required Connections*/
const router = require("express").Router();
const withAuth = require("../../utils/auth");

/*Home Routes:
Routes for homepage and login button on homepage.
*/
router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
