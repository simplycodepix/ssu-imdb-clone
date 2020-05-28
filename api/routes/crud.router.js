const crudRouter = require('express').Router();
const crudController = require('../controllers/crud.controller');

crudRouter.route('/crud/users/get')
    .get(crudController.getUserTableData);

crudRouter.route('/crud/rating/get')
    .get(crudController.getRatingTableData);

crudRouter.route('/crud/genres/get')
    .get(crudController.getGenreTableData);

crudRouter.route('/crud/locations/get')
    .get(crudController.getLocationTableData);

crudRouter.route('/crud/movies/get')
    .get(crudController.getMovieTableData);

module.exports = crudRouter;