//dependencies
const passport = require('passport');
const { Router } = require('express')
const fs = require('fs');
//my dependencies
const ImageService = require('../services/images.js')
//middleware
const { validatorHandler } = require('../middleware/validator.handler');
const { checkApiRol } = require('../middleware/auth.handler');

const {getImageSchema, deleteImageSchema} = require('../schema/images');
const { cloudinary, upload } = require('../middleware/image.handle.js');

// constants
const router = Router()
const services = new ImageService();

router.get('/:id',
  validatorHandler(getImageSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {id} = req.params;
      const image = await services.find(id);
      res.json(image)
    }
    catch(err){
      next(err)
    }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkApiRol('admin'),
  upload.single('image'),
  async(req,res,next)=>{
    try {
      const {idProduct} = req.body;
      // upload to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'cloudy'  // folder in Cloudinary
      });

      const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
      if(regex.test(result?.secure_url)){
        await services.create({idProduct: idProduct, image: result?.secure_url});
      }
      // delete el archive local before to up
      fs.unlinkSync(req.file.path);

      res.json({
        message: 'image upload successfully',
        url: result.secure_url
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkApiRol('admin'),
  validatorHandler(deleteImageSchema, 'params'),
  async(req,res,next)=>{
    try{
      const {id} = req.params;
      const image = await services.delete(id);
      res.json(image)
    }catch(error){
      next(error)
    }
});

module.exports = router;
