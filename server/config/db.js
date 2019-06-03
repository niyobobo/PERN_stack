const ENV = require('dotenv');

ENV.config();

module.exports = {
  DB_URI: process.env.DB_URI
}