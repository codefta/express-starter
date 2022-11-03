/* eslint-disable no-undef */
require("dotenv").config();

export default {
  port: process.env.PORT || 3001,
  mongodb: {
    uri: process.env.MONGODB_URI || "",
    db: process.env.MONGODB_DB || "",
  },
};
