const boom = require('@hapi/boom');
const  { models } = require('../libs/postgres')

class Products{
  constructor(){}

  async find(query){
    const options = {
      // include: ['category'],
      where: {}
    }

    const {
      limit,
      offset
    } = query;

    if(limit && offset){
      options.limit = limit,
      options.offset = offset
    }

    const res = await models.Product.findAll(options);
    return res
  }

  async findOne(id){
    const product = await models.Product.findByPk(id)
    console.log("🚀 ~ Products ~ findOne ~ product:", product)
    if(!product){
      throw boom.notFound('product not found')
    }
    return product
  }

  async create(body){
    const newProduct = await models.Product.create(body)
    return {
      message: "create success",
      success: newProduct
    }
  }

  async update(id, body){
    const product = await this.findOne(id)
    const result = await product.update(body);
    return {
      message: "update success",
      success: result
    }
  }

  async delete(id){
    const product = await this.findOne(id)
    await product.destroy()
    return {
      message: "delete success",
      success: id
    }
  }

}

module.exports = Products;
