const crudRouter = require('express').Router();
const crudController = require('../controllers/crud.controller');

// Users
crudRouter.route('/crud/users/get')
    .get(crudController.getUserTableData);

crudRouter.route('/crud/users/getSingle')
    .get(crudController.getSingleUser);

crudRouter.route('/crud/users/delete')
    .post(crudController.deleteUser);

crudRouter.route('/crud/users/update')
    .post(crudController.updateUser);

// Rating
crudRouter.route('/crud/rating/get')
    .get(crudController.getRatingTableData);

crudRouter.route('/crud/rating/getSingle')
    .get(crudController.getSingleRating);

crudRouter.route('/crud/rating/delete')
    .post(crudController.deleteRating);

crudRouter.route('/crud/rating/update')
    .post(crudController.updateRating);

// Genres
crudRouter.route('/crud/genres/get')
    .get(crudController.getGenreTableData);

crudRouter.route('/crud/genres/getSingle')
    .get(crudController.getSingleGenre);

crudRouter.route('/crud/genres/delete')
    .post(crudController.deleteGenre);

crudRouter.route('/crud/genres/update')
    .post(crudController.updateGenre);

// Locations
crudRouter.route('/crud/locations/get')
    .get(crudController.getLocationTableData);

crudRouter.route('/crud/locations/getSingle')
    .get(crudController.getSingleLocation);

crudRouter.route('/crud/locations/delete')
    .post(crudController.deleteLocation);

crudRouter.route('/crud/locations/update')
    .post(crudController.updateLocation);

// Movies
crudRouter.route('/crud/movies/get')
    .get(crudController.getMovieTableData);

crudRouter.route('/crud/movies/getSingle')
    .get(crudController.getSingleMovie);

crudRouter.route('/crud/movies/delete')
    .post(crudController.deleteMovie);

crudRouter.route('/crud/movies/update')
    .post(crudController.updateMovie);

module.exports = crudRouter;