/*Required Connections*/

const sequelize = require("../config/connection");
const users = require("./user-seeds");
const customers = require("./customer-seeds");

/*Seed All:
This is an async function that will synchronize the database with a force flag set to true.  Then it will run the user seeds and then the customer seeds*/

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
