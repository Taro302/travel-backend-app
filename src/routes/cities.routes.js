const express = require('express');
const upload = require('../utils/multer');

const router = express.Router();

//Controller functions
const cityController = require('./../controllers/city.controller')

//Middleware functions

router
  .route('/:id')
  .post(
    upload.single('imgURL'),
    cityController.CreateCity
  )
  .get(
    cityController.FindAllCity
  )


module.exports = router;