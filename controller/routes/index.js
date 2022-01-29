const router = require("express").Router();
const withAuth = require("../../utils/auth");
const Customer = require("../../models/customer");
const sequelize = require("sequelize");

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/dashboard", withAuth, (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.render("logout");
});

router.get("/homepage", (req, res) => {
  res.render("homepage");
});

router.get("/new-customers", withAuth, (req, res) => {
  res.render("new-customers", { loggedIn: req.session.loggedIn });
});

router.get("/all-customers", withAuth, (req, res) => {
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
    .then((customerData) => {
      const customers = customerData.map((customer) =>
        customer.get({ plain: true })
      );

      console.log(customers);
      res.render("all-customers", {
        customers,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
