const express = require('express');
const upload = require('../utils/multer');

const router = express.Router();

//Controller functions
const departamentController = require('../controllers/departament.controller')

//Middleware functions
const departamentMiddleware = require('./../middlewares/departament.middleware')

router
  .route('/')
  .post(
    upload.single('imgURL'),
    departamentController.CreateDepartament
  )
  .get(
    departamentController.FindAllDepartament
  )

router
  .route('/:id')
  .get(
    departamentMiddleware.validDepartament,
    departamentController.findOneDepartament
  )
  .patch(
    departamentMiddleware.validDepartament,
    departamentController.updateDepartament
  )

module.exports = router;