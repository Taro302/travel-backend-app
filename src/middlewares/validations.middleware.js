const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createUserValidator = [
  body('name')
    .notEmpty()
    .withMessage("Name cannot be empty"),
  body('email')
    .notEmpty()
    .withMessage("Email cannot be empty") 
    .isEmail()
    .withMessage("Must be a valid email"),
  body('password')
    .notEmpty()
    .withMessage("Password cannot be empty") 
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  validFields,
]

exports.loginUserValidator = [
  body('email')
    .notEmpty()
    .withMessage("Email cannot be empty") 
    .isEmail()
    .withMessage("Must be a valid email"),
  body('password')
    .notEmpty()
    .withMessage("Password cannot be empty") 
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  validFields,
]

exports.createRestaurantValidator = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),
  body('address')
    .notEmpty()
    .withMessage('Address is required')
    .isLength({ min: 5, max: 100 })
    .withMessage('Address must be between 5 and 100 characters'),
  body('rating')
    .notEmpty()
    .withMessage('Rating is required')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5!'),
  body('description')
    .notEmpty()
    .withMessage('Description is required!'),
  body('imgUrl')
    .custom((value, { req }) => {
      // Verificar si existe un archivo adjunto
      if (!req.file) {
        throw new Error('Image is required!');
      }
      return true;
    }),
  body('capacity')
    .notEmpty()
    .withMessage('Capacity is required!')
    .isInt({ min: 1, max: 100})
    .withMessage('Capacity must be between 1 and 100!'),
  validFields,
]

exports.updateRestaurantValidator = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),
  body('address')
    .notEmpty()
    .withMessage('Address is required')
    .isLength({ min: 5, max: 100 })
    .withMessage('Address must be between 5 and 100 characters'),
  body('description')
    .notEmpty()
    .withMessage('Description is required!'),
  body('imgUrl')
    .custom((value, { req }) => {
      // Verificar si existe un archivo adjunto
      if (!req.file) {
        throw new Error('Image is required!');
      }
      return true;
    }),
  body('capacity')
    .notEmpty()
    .withMessage('Capacity is required!')
    .isInt({ min: 1, max: 100})
    .withMessage('Capacity must be between 1 and 100!'),
  validFields,
]

exports.createMealValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required!'),
  body('description')
    .notEmpty()
    .withMessage('Name is required!'),
  body('price')
    .notEmpty()
    .withMessage('Price is required!')
    .isFloat()
    .withMessage('Price is number!'),
  body('imageUrl')
    .custom((value, { req }) => {
      // Verificar si existe un archivo adjunto
      if (!req.file) {
        throw new Error('Image is required!');
      }
      return true;
    }),
  validFields,
];

exports.updateMealValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required!'),
  body('description')
    .notEmpty()
    .withMessage('Name is required!'),
  body('price')
    .notEmpty()
    .withMessage('Price is required!'),
  validFields,
];