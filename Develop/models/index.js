// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  }
})
// Categories have many Products
Product.hasMany(Category, {
  foreignKey: 'category_id',
  onDelete:"cascade"
})
// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Product, {
  foreignKey: 'category_id',
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through:ProductTag},
  {foreignKey: 'TagProduct_id'})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
