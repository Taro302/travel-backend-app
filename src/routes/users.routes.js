const express = require('express');
const upload = require('../utils/multer');

const router = express.Router();

//Controller functions
const authController = require('../controllers/auth.controller')

//Middleware functions
const validation = require('../middlewares/validations.middleware');

//Rutas
router
  .route('/signup')
  .post(
    upload.single('imgUrl'),
    validation.createUserValidator,
    authController.signUp
  )
  
router
  .route('/login')
  .post(
    validation.loginUserValidator,
    authController.login
  )

module.exports = router;