const sequelize = require('../config/connection');

const customers = require('./customer-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await customers();
    console.log('--------------');


    process.exit(0);
};

seedAll();