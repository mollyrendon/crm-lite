const router = require('express').Router();
const Customer = require('../models/customer');

//Get all customers

router.get('/', (req, res) => {
    Customer.findAll(
        // {
        //     include: {
        //         attributes: [{ 'id, first_name, last_name, email, phone_number, is_customer'}]
        //     }
        // }
    )
        .then(customerData => res.json(customerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;



