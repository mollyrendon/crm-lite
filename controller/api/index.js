/*Required Connections*/
const router = require("express").Router();
const customerRoutes = require("./customer-routes.js");
const homeRoutes = require("./home-routes.js");
const userRoutes = require("./user-routes");

/*Customer routes, home routes, and user routes*/
router.use("/customers", customerRoutes);
router.use("/", homeRoutes);
router.use("/users", userRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
