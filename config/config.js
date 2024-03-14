require('dotenv').config();

module.exports = {
  development: {
    url: process.env.URL_ELEPHANT,
    dialect: 'postgres',
  },
  test: {
    url: process.env.URL_ELEPHANT,
    dialect: 'postgres',
  },
  production: {
    url: process.env.URL_ELEPHANT,
    dialect: 'postgres',
  }
}