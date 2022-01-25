const path = require('path');
const express = require('express');
// const session = require('express-session')
const routes = require('./API/customer-routes');
const sequelize = require('./config/connection');
// const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);


// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     // store: new SequelizeStore({
//     //     db: sequelize
//     // })
// };

// app.use(session(sess));
// const helpers = require('./utils/helpers');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});