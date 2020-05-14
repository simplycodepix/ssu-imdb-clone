const sql = require('../db');

var Movie = function (movie) {
    this.movie = movie.movie;
    this.status = movie.status;
    this.created_at = new Date();
};

Movie.addMovie = (newMovie, result) => {
    sql.query("INSERT INTO movies set ?", newMovie, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

module.exports = Movie;