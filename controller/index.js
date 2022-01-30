const router = require('express').Router();
const apiRoutes = require('./api');
const routes = require('./routes')
var bodyParser = require('body-parser')

router.use('/api', apiRoutes)
router.use('/', routes)

module.exports = router;