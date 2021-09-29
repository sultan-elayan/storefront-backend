'use strict';

const POSTGRES_URI =  process.env.DATABASE_URL || "postgres://localhost:5432/sultan"
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = {
  dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
} ;
let sequelize = new Sequelize(POSTGRES_URI,sequelizeOptions);

const product = require('./products.model');
const categories = require('./categories.model')

module.exports = {
  db: sequelize,
  products: product(sequelize, DataTypes),
  categories: categories(sequelize, DataTypes)
};