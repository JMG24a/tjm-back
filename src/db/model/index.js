const {User, UserSchema} = require('./users');
const {Suggest, SuggestSchema} = require('./suggest');
const {Product, ProductSchema} = require('./products');
const {Image, ImageSchema} = require('./image');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Suggest.init(SuggestSchema, Suggest.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Image.init(ImageSchema, Image.config(sequelize));

  Suggest.associate?.(sequelize.models);
}

module.exports = setupModels;
