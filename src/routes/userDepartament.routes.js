const express = require('express');
const upload = require('../utils/multer');

const router = express.Router();

//Controller functions
const UserDepartamentController = require('./../controllers/userDepartament.controller')

//Middleware functions
const departamentMiddleware = require('./../middlewares/departament.middleware')

router
  .route('/')
  .post(
    upload.single('imgURL'),
    UserDepartamentController.CreateUserDepartament
  )
  .get(
    UserDepartamentController.FindAllUserDepartament  
  )

router
  .route('/:id')
  .patch(
    upload.single('imgURL'),
    UserDepartamentController.UpdatedUserDepartament
  )


module.exports = router;