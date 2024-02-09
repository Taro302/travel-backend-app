const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require('hpp');
const sanitizer = require('perfect-express-sanitizer');
// const multer  = require('multer')


//Utils functions
const AppError = require('./utils/appError');

//Controllers functions
const globalErrorHandler = require('./controllers/error.controller');

//Routes functions
const usersRouter = require('./routes/users.routes');

const app = express();
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Rate limit exceeded'
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: false,
  }
));

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Rutes petitioner limitation
app.use('/api/v1', limiter);

//Routes 
app.use('/api/v1/users', usersRouter);

app.all('*', (req, res, next) => 
    next( new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
))

app.use(globalErrorHandler)

module.exports = app;