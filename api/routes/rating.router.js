const ratingRouter = require('express').Router();
const ratingController = require('../controllers/rating.controller');

ratingRouter.route('/rating/add')
    .post(ratingController.add);

module.exports = ratingRouter;