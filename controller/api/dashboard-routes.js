const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard')
})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;