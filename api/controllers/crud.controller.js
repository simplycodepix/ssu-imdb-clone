const Rating = require('../models/Rating.model');
const User = require('../models/User.model');
const Movie = require('../models/Movie.model');
const Location = require('../models/Location.model');
const Genre = require('../models/Genre.model');

exports.getMovieTableData = async (req, res) => {
    Movie.getCountTotal(({ count }) => {
        Movie.getMoviesTableData(({ result }) => {
            res.json({ movies: result, count });
        });
    });
};

exports.getUserTableData = async (req, res) => {
    User.getUsers(({ result }) => {
        res.json({ users: result });
    })
};

exports.getLocationTableData = async (req, res) => {
    Location.getLocations(({ result }) => {
        res.json({ locations: result });
    })
};

exports.getRatingTableData = async (req, res) => {
    Rating.getRatings(({ result }) => {
        res.json({ ratings: result });
    })
};

exports.getGenreTableData = async (req, res) => {
    Genre.getGenres(({ result }) => {
        res.json({ genres: result });
    })
};