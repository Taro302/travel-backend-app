const Departament = require("../models/departament.model");
const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");
const City = require("../models/cities.model");

exports.validDepartament = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const city = await City.findAll({ 
      where: {
        idDepartament: id
      }
   })
   
  const departament = await Departament.findOne({
    where: {
      id
    },
  })

  if(!departament)
    next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));

  req.departament = departament
  req.city = city
  next()
})