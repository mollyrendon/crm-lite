const sequelize = require("../config/connection");
const User = require("../models/user");

const userData = [
  {
    username: "test",
    email: "test@test.com",
    password: "supersecret",
  },
];

const users = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = users;
