const routes = require('express').Router();
const movieRouter = require('./movie.router');
const userRouter = require('./user.router');
const ratingRouter = require('./rating.router');
const crudRouter = require('./crud.router');

routes.use('/', movieRouter);
routes.use('/', userRouter);
routes.use('/', ratingRouter);
routes.use('/', crudRouter);

module.exports = routes;