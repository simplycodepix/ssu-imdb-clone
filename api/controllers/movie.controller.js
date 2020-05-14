const Movie = require('../models/Movie.model');

exports.list = async (req, res) => {

};

exports.addMovie = async (req, res) => {
    const newMovie = new Movie(req.body);

    if (!newMovie.movie || !newMovie.status) {
        res.status(400).send({ error: true, message: 'Please provide task/status' });
    } else {
        Movie.addMovie(newMovie, function (err, movie) {
            if (err)
                res.send(err);
            res.json(movie);
        });
    }
};