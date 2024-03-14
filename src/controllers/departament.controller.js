const Departament = require("../models/departament.model");
const catchAsync = require("../utils/catchAsync");

const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { storage } = require('../utils/firebase');

exports.CreateDepartament = catchAsync(async (req, res, next) => {
  const { name, info } = req.body

  let imgURL;

  if (req.file) {
    const imgRef = ref(storage, `departaments/${Date.now()}-${req.file.originalname}`);
    const imgUploaded = await uploadBytes(imgRef, req.file.buffer);
    imgURL = imgUploaded.metadata.fullPath;
  }

  const departament = await Departament.create({
    name,
    info,
    imgURL
  })

  res.status(200).json({
    status: "success",
    message: 'Created departament',
    departament
  })
})

exports.FindAllDepartament = catchAsync(async (req, res, next) => {
  const departaments = await Departament.findAll();

  const departamentsWithImgUrl = await Promise.all(
    departaments.map(async (departament) => {
      const imgRef = ref(storage, departament.imgURL);
      const url = await getDownloadURL(imgRef);

      return {
        id: departament.id,
        name: departament.name,
        info: departament.info,
        imgURL: url,
      };
    })
  );

  res.status(200).json({
    status: 'Success',
    data: departamentsWithImgUrl
  })
});

exports.findOneDepartament = catchAsync(async (req, res, next) => {
  const { departament, city } = req;

  res.status(200).json({
    status: "success",
    name: departament.name,
    info: departament.info,
    imgURL: departament.imgURL, 
    city
  })
  
});