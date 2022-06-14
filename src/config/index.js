/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  mongodb: {
    uri: process.env.MONGODB_URI,
    db: process.env.MONGODB_DB,
  },
};
