const boom = require('@hapi/boom');
const  { models } = require('../libs/postgres')
const  { hashPassword } = require('../libs/encrypt')

class Users{
  constructor(){}

  async find(){
    const res = await models.User.findAll();
    return res
  }

  async findByEmail(email){
    const res = await models.User.findOne({
      where: { email }
    });
    return res
  }

  async findOne(id){
    const user = await models.User.findByPk(id)
    if(!user){
      throw boom.notFound('user not found')
    }
    return user
  }

  async create(body){
    const {password} = body;
    const hash = await hashPassword(password);
    console.log("🚀 ~ Images ~ create ~ hash:", hash)
    body.password = hash;
    console.log("🚀 ~ Images ~ create ~ body:", body)
    const newUser = await models.User.create(body)
    return {
      message: "create success",
      success: newUser
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

module.exports = Users;
