const {User, UserSchema} = require('./users');
const {Suggest, SuggestSchema} = require('./suggest');
const {Product, ProductSchema} = require('./products');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Suggest.init(SuggestSchema, Suggest.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
