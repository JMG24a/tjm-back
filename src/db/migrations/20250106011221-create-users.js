'use strict';

const { USER_TABLE, UserSchema } = require('../model/users');
const { PRODUCTS_TABLE, ProductSchema } = require('../model/products');
const { SUGGESTIONS_TABLE, SuggestSchema } = require('../model/suggest');
const { IMAGES_TABLE, ImageSchema } = require('../model/image');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema);
    await queryInterface.createTable(SUGGESTIONS_TABLE, SuggestSchema);
    await queryInterface.createTable(IMAGES_TABLE, ImageSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(SUGGESTIONS_TABLE);
    await queryInterface.dropTable(IMAGES_TABLE);
  }
};
