const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const Rating = require('../models/Rating.model');
const Movie = require('../models/Movie.model');

exports.list = async (req, res) => {
    User.getUsers(({ result }) => {
        res.json(result);
    });
};

exports.registration = async (req, res) => {
    const userData = {
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        age: req.body.age,
        sex: req.body.sex
    };

    User.findByEmailOrUsername({ username: userData.username, email: userData.email }, async ({ result }) => {
        if (result && result.length > 0) return res.send({ error: 'Email or username already in use' });

        const user = new User(userData);

        const salt = await bcrypt.genSalt(8);
        user.password = await bcrypt.hash(user.password, salt);

        User.addUser(user, function ({ err, user }) {
            if (err) return res.send(err);
            res.json({ user });
        });
    });
};

exports.login = async (req, res) => {
    const credentials = {
        login: req.body.login,
        password: req.body.password
    };

    User.findByLogin({ login: credentials.login }, async ({ result }) => {
        if (result.length === 0) return res.send({ error: 'User not found!' });
        const user = result[0];

        const validPass = await bcrypt.compare(credentials.password, user.password);
        if (!validPass) return res.json({ error: 'Wrong Password!' });

        res.json({ user: User.getLimitedUserData(user) });
    });
};

exports.getMovieSuggestions = async (req, res) => {
    const user_id = req.params.id;

    Rating.getMostRatedGenre({ user_id }, ({ result }) => {
        const genres = result.map(genre => genre.genre_id);

        Movie.getMovieSuggestions({ genres }, ({ result }) => {
            res.json(result);
        });
    });

};

exports.getUserData = async (req, res) => {
    const user_id = req.params.id;
    let userData = {};

    User.findById({ id: user_id }, (({ result }) => {
        const user = result[0];
        userData = { ...userData, ...user };

        User.getRatedMovies({ user_id }, ({ result }) => {
            userData = { ...userData, ratedMovies: result }
            Rating.getMostRatedGenre({ user_id }, ({ result }) => {
                userData = { ...userData, preferedGenres: result }
                res.json(userData);
            });
        });
    }))
};