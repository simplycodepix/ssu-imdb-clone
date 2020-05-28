const movieRouter = require('express').Router();
const movieController = require('../controllers/movie.controller');

movieRouter.route('/movie/list')
    .get(movieController.list);

movieRouter.route('/movie/top')
    .get(movieController.getTopRatedMovies);

movieRouter.route('/movie/add')
    .post(movieController.addMovie);

movieRouter.route('/movie/:id')
    .get(movieController.getMovie);

movieRouter.route('/movie/:id/ratings')
    .get(movieController.getRatingsForMovie);

movieRouter.route('/movie/:id/update')
    .post(movieController.updateMovie);

movieRouter.route('/movie/:id/delete')
    .post(movieController.deleteMovie);

module.exports = movieRouter;