const boom = require('@hapi/boom');
const  { models } = require('../libs/postgres')

class Images{
  constructor(){}

  async find(idProduct){
    const options = {
      where: {
        id_product: idProduct
      }
    }
    const image = await models.Image.findAll(options)
    if(!image){
      throw boom.notFound('image not found')
    }
    return image
  }

  async create(body){
    const image = await models.Image.create(body)
    return {
      message: "create success",
      success: image
    }
  }

  async delete(id){
    const image = await models.Image.findByPk(id)
    if(!image){
      throw boom.notFound("image not found")
    }
    await image.destroy()
    return {
      message: "delete success",
      success: id
    }
  }

}

module.exports = Images;

