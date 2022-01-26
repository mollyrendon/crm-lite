const router = require('express').Router();
const customerRoutes = require('./customer-routes.js');
const homeRoutes = require('./home-routes.js');


router.use('/customers', customerRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();

});

module.exports = router;