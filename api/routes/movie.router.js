const movieRouter = require('express').Router();
const movieController = require('../controllers/movie.controller');

movieRouter.route('/list')
    .get(movieController.list);

movieRouter.route('/add')
    .post(movieController.addMovie);

module.exports = movieRouter;