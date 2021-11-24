// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {id: (`INT NOT NULL SET PRIMARY KEY AUTO INCREMENT`),
  product_name:(`STRING NOT NULL`),

    // define columns
  },price: (`DECIMAL NOT NULL `),
  stock: (`INT NOT NULL`),
  category_id: (`)
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
