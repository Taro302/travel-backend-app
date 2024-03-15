const catchAsync = require("../utils/catchAsync");
const UserDepartament = require("../models/userDepartament.model");
const { ref, uploadBytes, getDownloadURL, deleteObject } = require('firebase/storage');
const { storage } = require('../utils/firebase');

exports.CreateUserDepartament = catchAsync(async (req, res, next) => {
  const { name } = req.body

  let imgURL;

  if (req.file) {
    const imgRef = ref(storage, `departaments/${Date.now()}-${req.file.originalname}`);
    const imgUploaded = await uploadBytes(imgRef, req.file.buffer);
    imgURL = imgUploaded.metadata.fullPath;
  }

  const departament = await UserDepartament.create({
    name,
    imgURL
  })

  res.status(200).json({
    status: "success",
    message: 'Created departament',
    departament
  })
})

exports.FindAllUserDepartament = catchAsync(async (req, res, next) => {
  const userDepartaments = await UserDepartament.findAll();

  const departamentsWithImgUrl = await Promise.all(
    userDepartaments.map(async (userDepartaments) => {
      const imgRef = ref(storage, userDepartaments.imgURL);
      const url = await getDownloadURL(imgRef);

      return {
        id: userDepartaments.id,
        name: userDepartaments.name,
        imgURL: url,
        status: userDepartaments.status
      };
    })
  );

  res.status(200).json({
    status: 'Success',
    data: departamentsWithImgUrl
  })
});

exports.UpdatedUserDepartament = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body; 

  const userDepartament = await UserDepartament.findOne({
    where: {
      id
    }
  });
  await userDepartament.update({ status });
console.log(status)
  res.status(200).json({
    status: 'Success',
    userDepartament
  });
});