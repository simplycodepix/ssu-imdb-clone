const routes = require('express').Router();
const movieRouter = require('./movie.router');

routes.use('/', movieRouter);

module.exports = routes;