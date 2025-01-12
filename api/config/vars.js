/* eslint no-undef: 0 */
const path = require("path");
require("dotenv-safe").config({
  path: path.join(__dirname, `../../.env.${process.env.ENV}`),
  sample: path.join(__dirname, "../../.env.example"),
});

module.exports = {
  env: process.env.ENV || "dev",
  port: process.env.PORT,
  basicAuthToken: process.env.BASIC_AUTH_TOKEN,
  };
