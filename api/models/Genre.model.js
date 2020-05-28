const sql = require('../db');

const Genre = function (genre) {
    this.title = genre.name;
};

Genre.getSingle = ({ genre_id }, callback) => {
    sql.query("SELECT * FROM genres WHERE id = ?", [genre_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

Genre.getGenres = (callback) => {
    sql.query("SELECT * FROM genres", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Genre.deleteGenre = ({ genre_id }, callback) => {
    sql.query("DELETE FROM genres WHERE id = ?", [genre_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Genre.deleteFromMovieGenre = ({ genre_id, movie_id }, callback) => {
    sql.query("DELETE FROM movie_genre WHERE genre_id = ? OR movie_id = ?", [genre_id, movie_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Genre.updateGenre = ({ genre_id, data }, callback) => {
    sql.query("UPDATE genres SET name = ? WHERE id = ?", [data.name, genre_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
}

module.exports = Genre;