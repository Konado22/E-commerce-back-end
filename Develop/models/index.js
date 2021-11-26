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
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete:"cascade",
  onCreate: 'cascade'
})
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany({through: ProductTag}, {
//   foreignKey: 'category_id'})
// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany({through:Product},{foreignKey: 'TagProduct_id'}),

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
