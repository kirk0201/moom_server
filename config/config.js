require("dotenv").config();
module.exports = {
  development: {
    username: process.env.PJ_USERNAME,
    password: process.env.PJ_PASSWORD,
    database: process.env.PJ_DATABASE,
    host: process.env.PJ_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.TS_USERNAME,
    password: process.env.TS_PASSWORD,
    database: process.env.TS_DATABASE,
    host: process.env.TS_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.PJ_USERNAME,
    password: process.env.PJ_PASSWORD,
    database: process.env.PJ_DATABASE,
    host: process.env.PJ_HOST,
    dialect: "mysql",
  },
};
