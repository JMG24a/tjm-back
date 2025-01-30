const boom = require('@hapi/boom');
const  { models } = require('../libs/postgres')

class Products{
  constructor(){}

  async find(query){
    const {
      limit,
      offset,
      category
    } = query;
      console.log("🚀 ~ Products ~ find ~ category:", category)

    const options = {
      // include: ['category'],
      // where: { category: category }
    }

    if(category){
      options.where = {category};
    }

    if(limit && offset){
      options.limit = limit,
      options.offset = offset
    }

    try {
      const res = await models.Product.findAll(options);
      return res;
    } catch (error) {
      throw boom.badData('product not found')
    }
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
