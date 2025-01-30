const boom = require('@hapi/boom');
const  { models } = require('../libs/postgres')

class Suggestions{
  constructor(){}

  async find(idProduct){
    const options = {
      where: {
        id_product: idProduct,
      },
      include: [
        {
          model: models.Product,
          as: 'suggest', // Debe coincidir con el alias definido en la asociación
        },
      ],
    }
    const suggest = await models.Suggest.findAll(options)
    if(!suggest){
      throw boom.notFound('suggest not found')
    }
    return suggest
  }

  async create(body){
    const suggest = await models.Suggest.create(body)
    return {
      message: "create success",
      success: suggest
    }
  }

  async update(id, body){
    const suggest = await models.Suggest.findByPk(id)
    if(!Suggest){
      throw boom.notFound("suggest not found")
    }
    const result = await suggest.update(body);
    return {
      message: "update success",
      success: result
    }
  }

  async delete(id){
    const suggest = await models.Suggest.findByPk(id)
    if(!suggest){
      throw boom.notFound("suggest not found")
    }
    await suggest.destroy()
    return {
      message: "delete success",
      success: id
    }
  }

}

module.exports = Suggestions;
