/*Required Connections*/
const router = require("express").Router();
const withAuth = require("../../utils/auth");

/*Dashboard Routes:
Routes for dashboard and logout button on dashboard.
*/
router.get("/", (req, res) => {
  res.render("dashboard");
});

router.get("/logout", (req, res) => {
  res.render("logout");
});

module.exports = router;
