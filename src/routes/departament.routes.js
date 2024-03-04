const express = require('express');
const upload = require('../utils/multer');

const router = express.Router();

//Controller functions
const departamentController = require('../controllers/departament.controller')

//Middleware functions

router
  .route('/')
  .post(
    upload.single('imgURL'),
    departamentController.CreateDepartament
  )
  .get(
    departamentController.FindAllDepartament
  )


module.exports = router;