const { Sequelize } = require('sequelize');
const config = require('../config/config');
const pg = require('pg');
require('dotenv').config();

const sequelize = new Sequelize(config.development.url ,{
    
  dialectModule: pg
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Atenção, a conexão falhou!:', error);
  }

module.exports={Sequelize,sequelize};