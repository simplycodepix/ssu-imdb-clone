const Movie = require('../models/Movie.model');
const User = require('../models/User.model');

exports.list = async (req, res) => {
    const paginationData = {
        limit: parseInt(req.query.limit) ? parseInt(req.query.limit) : 12,
        offset: parseInt(req.query.offset) ? parseInt(req.query.offset) : false,
        top: parseInt(req.query.top) ? parseInt(req.query.top) : false,
    };

    Movie.getCountTotal(({ count }) => {
        Movie.getMovies(paginationData, ({ result }) => {
            res.json({ movies: result, count });
        });
    });
};

exports.getMovie = async (req, res) => {
    const movie_id = req.params.id;

    Movie.getMovie(movie_id, ({ result }) => {
        res.json({ movie: result[0] });
    });
}

exports.addMovie = async (req, res) => {
    const movieData = {
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    }
    const newMovie = new Movie(movieData);

    if (!newMovie.title || !newMovie.description) {
        res.status(400).send({ error: true, message: 'Please provide movie' });
    } else {
        Movie.addMovie(newMovie, function ({ err, movie }) {
            if (err) return res.send(err);
            res.json(movie);
        });
    }
};

exports.updateMovie = async (req, res) => {
    const movie = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    };

    Movie.updateMovie(movie, ({ result }) => {
        res.json(result);
    });
};

exports.deleteMovie = async (req, res) => {
    const movieId = req.body.movie_id;
    Movie.deleteMovie({ id: movieId }, ({ result }) => {
        res.json(result);
    });
};

exports.getTopRatedMovies = async (req, res) => {
    const count = req.query.count ? parseInt(req.query.count) : 5;

    Movie.getTopRatedMovies({ count }, ({ result }) => {
        res.json(result);
    });
};

exports.getRatingsForMovie = async (req, res) => {
    const movie_id = req.params.id;
    User.getUsersRatingByMovie(movie_id, ({ result }) => {
        res.json(result);
    });
};