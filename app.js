const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const errorController = require('./Controller/errorController');
const studentRouter = require('./Routes/studentRoutes');
const branchRouter = require('./Routes/branchRoute');
const userRouter = require('./Routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/branch', branchRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorController);

module.exports = app;
