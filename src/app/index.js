const http = require("./http");

/**
 * App server, put any transport layer here
 *
 * @param {*} app
 */
module.exports = function (app) {
  http(app);
};
