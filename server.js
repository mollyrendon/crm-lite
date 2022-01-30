const path = require("path");
const express = require("express");
const session = require("express-session");
const controller = require("./controller");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
const urlencodeParser = bodyParser.urlencoded({ extended: false });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(controller);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
