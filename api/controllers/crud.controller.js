const Rating = require('../models/Rating.model');
const User = require('../models/User.model');
const Movie = require('../models/Movie.model');
const Location = require('../models/Location.model');
const Genre = require('../models/Genre.model');

// READ
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

// READ SINGLE
exports.getSingleMovie = async (req, res) => {
    const movie_id = parseInt(req.query.movie_id);

    Movie.getSingle({ movie_id }, ({ result }) => {
        res.json({ movie: result });
    })
};

exports.getSingleRating = async (req, res) => {
    const movie_id = parseInt(req.query.movie_id);
    const user_id = parseInt(req.query.user_id);

    Rating.getSingle({ movie_id, user_id }, ({ result }) => {
        res.json({ rating: result });
    })
};

exports.getSingleGenre = async (req, res) => {
    const genre_id = parseInt(req.query.genre_id);

    Genre.getSingle({ genre_id }, ({ result }) => {
        res.json({ genre: result });
    })
};

exports.getSingleLocation = async (req, res) => {
    const location_id = parseInt(req.query.location_id);

    Location.getSingle({ location_id }, ({ result }) => {
        res.json({ location: result });
    })
};

exports.getSingleUser = async (req, res) => {
    const user_id = parseInt(req.query.user_id);

    User.getSingle({ user_id }, ({ result }) => {
        res.json({ user: result });
    })
};


// DELETE
exports.deleteUser = async (req, res) => {
    const user_id = parseInt(req.body.user_id);
    if (user_id === 1) return res.json({ error: "Can't delete user" });
    Rating.deleteRatingByUserOrMovie({ user_id }, ({ result }) => {
        User.deleteUser({ user_id }, (result) => {
            res.json(result);
        });
    })
};

exports.deleteRating = async (req, res) => {
    const movie_id = parseInt(req.body.movie_id);
    const user_id = parseInt(req.body.user_id);

    Rating.deleteRating({ movie_id, user_id }, (result) => {
        res.json(result);
    });
};

exports.deleteLocation = async (req, res) => {
    const location_id = parseInt(req.body.location_id);
    Location.deleteById({ location_id }, (result) => {
        res.json(result);
    });
};

exports.deleteMovie = async (req, res) => {
    const movie_id = req.body.movie_id;
    Location.deleteByMovieId({ movie_id }, ({ error }) => {
        if (!error) {
            Rating.deleteRatingByUserOrMovie({ movie_id }, ({ error }) => {
                if (!error) {
                    Genre.deleteFromMovieGenre({ movie_id }, ({ error }) => {
                        if (!error) {
                            Movie.deleteById({ movie_id }, (result) => {
                                res.json(result);
                            });
                        } else {
                            res.json({ error });
                        }
                    })
                } else {
                    res.json({ error });
                }
            });
        } else {
            res.json({ error });
        }
    });
};

exports.deleteGenre = async (req, res) => {
    const genre_id = parseInt(req.body.genre_id);
    Genre.deleteFromMovieGenre({ genre_id }, ({ error }) => {
        if (!error) {
            Genre.deleteGenre({ genre_id }, (result) => {
                res.json(result);
            });
        } else {
            res.json({ error: error });
        }
    })
};

// UPDATE
exports.updateGenre = async (req, res) => {
    const genre_id = parseInt(req.body.genre_id);
    const genre_name = req.body.genre_name;

    Genre.updateGenre({ genre_id, data: { name: genre_name } }, (result) => {
        res.json(result);
    });
};

exports.updateUser = async (req, res) => {
    const user_id = parseInt(req.body.user_id);

    const userData = {
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        age: parseInt(req.body.age),
        sex: req.body.sex
    };

    User.updateUser({ user_id, data: userData }, (result) => {
        res.json(result);
    });
};

exports.updateRating = async (req, res) => {
    const ids = {
        movie_id: parseInt(req.body.movie_id),
        user_id: parseInt(req.body.user_id)
    };
    const rating = req.body.rating;

    Rating.updateRating({ ids, data: { rating } }, (result) => {
        res.json(result);
    });
};

exports.updateLocation = async (req, res) => {
    const location_id = parseInt(req.body.location_id);
    const location = req.body.location;

    Location.updateLocation({ location_id, data: { location } }, (result) => {
        res.json(result);
    });
};

exports.updateMovie = async (req, res) => {
    const movie_id = parseInt(req.body.movie_id);

    const movieData = {
        title: req.body.title,
        description: req.body.description,
        year: parseInt(req.body.year)
    };


    Movie.updateMovie({ movie_id, data: movieData }, (result) => {
        res.json(result);
    });
};