const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');

userRouter.route('/user/list')
    .get(userController.list);

// userRouter.route('/user/ratings')
//     .get(userController.getRatedMovies);

userRouter.route('/user/login')
    .post(userController.login);

userRouter.route('/user/registration')
    .post(userController.registration);

userRouter.route('/user/:id')
    .get(userController.getUserData);

userRouter.route('/user/:id/suggestions')
    .get(userController.getMovieSuggestions);

module.exports = userRouter;