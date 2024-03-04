const express = require('express');
const upload = require('../utils/multer');

const router = express.Router();

//Controller functions
const turistPlaceController = require('./../controllers/turistPlace.controller');

//Middleware functions

router
  .route('/:id')
  .post(
    upload.single('imgURL'),
    turistPlaceController.CreateTuristPlace
  )
  .get(
    turistPlaceController.FindAllTuristPlace
  )


module.exports = router;