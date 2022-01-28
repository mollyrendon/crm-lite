const router = require("express").Router();
const sequelize = require("../../config/connection");
const Customer = require("../../models/customer.js");
const withAuth = require("../../utils/auth");

//Get all customers

router.get("/", (req, res) => {
  console.log("whatever");
  Customer.findAll({
    attributes: [
      "id",
      "first_name",
      "last_name",
      "email",
      "phone_number",
      "is_customer",
      [sequelize.literal("(SELECT COUNT(*) FROM customer)"), "all_customers"],
    ],
  })
    .then((customerData) => res.json(customerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id,
    },
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.get("/:last_name", (req, res) => {
  Customer.findOne({
    where: {
      last_name: req.params.last_name,
    },
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.post("/", withAuth, (req, res) => {
  Customer.create(req.body).then((customerData) => {
    res.json(customerData);
  });
});

router.put("/:id", withAuth, (req, res) => {
  Customer.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((customerData) => {
    res.json(customerData);
  });
});

router.delete("/:id", withAuth, (req, res) => {
  Customer.destroy({
    where: {
      id: req.params.id,
    },
  }).then((customerData) => {
    res.json(customerData);
  });
});

module.exports = router;
