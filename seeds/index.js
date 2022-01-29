const sequelize = require("../config/connection");
const users = require("./user-seeds");
const customers = require("./customer-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("--------------");
  await users();
  console.log("--------------");
  await customers();
  console.log("--------------");

  process.exit(0);
};

seedAll();
