const router = require("express").Router();
const sequelize = require("../../config/connection");
const Customer = require("../../models/customer.js");
const withAuth = require("../../utils/auth");

//Get all customers

router.get("/", withAuth, (req, res) => {
  console.log("whatever");
  Customer.findAll({
    where: {
      user_id: req.session.user_id,
    },
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

router.get("/:id", withAuth, (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id,
    },
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.get("/:last_name", withAuth, (req, res) => {
  Customer.findOne({
    where: {
      last_name: req.params.last_name,
    },
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.post("/", withAuth, (req, res) => {
  console.log("here", req.body, req.session);

  Customer.create({
    ...req.body,
    user_id: req.session.user_id,
  }).then((customerData) => {
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
