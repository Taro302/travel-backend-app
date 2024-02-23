const bcrypt = require('bcryptjs');
const generateJWT = require('./../utils/jwt');
const catchAsync = require("../utils/catchAsync");
const User = require('../models/user.model');

const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { storage } = require('../utils/firebase');

exports.signUp = catchAsync(async (req, res, next) => {
  const { name, firstLastName, secondLastName, email, password } = req.body;

  let imgUrl; // imgUrl estará indefinido al principio

  if (req.file) {
    const imgRef = ref(storage, `users/${Date.now()}-${req.file.originalname}`);
    const imgUploaded = await uploadBytes(imgRef, req.file.buffer);
    imgUrl = imgUploaded.metadata.fullPath;
  }

  const salt = await bcrypt.genSalt(16);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    firstLastName: firstLastName.toLowerCase(),
    secondLastName: secondLastName.toLowerCase(),
    imgUrl: imgUrl,
    password: encryptedPassword,
  });

  const token = await generateJWT(user.id);

  res.status(200).json({
    status: 'success',
    message: 'The user has been created',
    token,
    user: {
      id: user.id,
      name: user.name,
      firstLastName: user.firstLastName,
      secondLastName: user.secondLastName,
      email: user.email,
      imgUrl: user.imgUrl,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email: email.toLowerCase(),
      status: 'enabled',
    },
  });

  if (!user) {
    return next(new AppError(`User with email: ${email} not found`, 404));
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return next(new AppError(`Incorrect email or password`, 401));
  }

  const token = await generateJWT(user.id);

  const imgRef = ref(storage, user.imgUrl);
  const url = await getDownloadURL(imgRef);

  res.status(200).json({
    status: 'success',
    token,
    user: {
      id: user.id,
      name: user.name,
      firstLastName: user.firstLastName,
      secondLastName: user.secondLastName,
      email: user.email,
      imgUrl: url,
    },
  });
});