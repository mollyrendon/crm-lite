/*Required Connections*/
const router = require("express").Router();
const apiRoutes = require("./api");
const routes = require("./routes");

/*Routes for api and routes*/
router.use("/api", apiRoutes);
router.use("/", routes);

module.exports = router;
