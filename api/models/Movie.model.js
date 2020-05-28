const sql = require('../db');

const Movie = function (movie) {
    this.title = movie.title;
    this.year = movie.year;
    this.description = movie.description;
};

Movie.getSingle = ({ movie_id }, callback) => {
    sql.query("SELECT * FROM movie WHERE id = ?", [movie_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

Movie.addMovie = (newMovie, callback) => {
    sql.query("INSERT INTO movie set ?", newMovie, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ movie: result.insertId });
    });
};

Movie.updateMovie = ({ id, title, description, year }, callback) => {
    sql.query("UPDATE movie SET title = ?, description = ?, year = ? WHERE id = ?", [title, description, year, id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ movie: result.insertId });
    });
};

Movie.deleteMovie = ({ id }, callback) => {
    sql.query("DELETE FROM movie WHERE id = ?", [id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ movie: result.insertId });
    });
};

Movie.getCountTotal = (callback) => {
    sql.query("SELECT COUNT(*) AS count FROM movie", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ count: result && result[0].count ? result[0].count : 0 });
    });
};

Movie.getMoviesTableData = (callback) => {
    let query = `SELECT * FROM movie m;`;

    sql.query(query, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
}

Movie.getMovies = ({ limit = false, offset = false, top = false }, callback) => {
    let ratingSubSelect = `(
        SELECT ROUND(AVG(rating), 2) FROM rating AS r WHERE m.id = r.movie_id  AND r.user_id NOT IN (
            SELECT user_id FROM rating GROUP BY user_id HAVING COUNT(user_id) < 5
        )
    )`;

    let pagination = `${limit ? 'LIMIT ' + limit : ''} ${offset ? 'OFFSET ' + offset : ''}`;
    let topMovies = `${top ? 'ORDER BY rating DESC' : 'ORDER BY m.id'}`;

    let query = `
        SELECT m.id, m.title, m.description, m.year, 
            GROUP_CONCAT(DISTINCT l.location SEPARATOR ', ') AS locations, 
            GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genres, 
            ${ratingSubSelect} as rating
        FROM movie m
        LEFT JOIN movie_genre mg ON m.id = mg.movie_id
        LEFT JOIN genres g ON g.id = mg.genre_id
        LEFT JOIN location l ON l.movie_id = m.id
        GROUP BY m.id
        ${topMovies}
        ${pagination};
    `;

    sql.query(query, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Movie.getMovie = (movie_id, callback) => {
    let ratingSubSelect = `(
        SELECT ROUND(AVG(rating), 2) FROM rating AS r WHERE m.id = r.movie_id  AND r.user_id NOT IN (
            SELECT user_id FROM rating GROUP BY user_id HAVING COUNT(user_id) < 5
        )
    )`;

    let query = `
        SELECT m.id, m.title, m.description, m.year, 
            GROUP_CONCAT(DISTINCT l.location SEPARATOR ', ') AS locations, 
            GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genres, 
            ${ratingSubSelect} as rating
        FROM movie m
        LEFT JOIN movie_genre mg ON m.id = mg.movie_id
        LEFT JOIN genres g ON g.id = mg.genre_id
        LEFT JOIN location l ON l.movie_id = m.id
        WHERE m.id = ?;
    `;


    sql.query(query, [movie_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Movie.getTopRatedMovies = ({ count }, callback) => {
    let query = `
        SELECT m.id, m.title, m.description, m.year, ROUND(AVG(r.rating),2) as rating FROM movie m
        LEFT JOIN rating r ON m.id = r.movie_id
        GROUP by m.id
        ORDER BY rating DESC
        LIMIT ?;
    `;

    sql.query(query, [count], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Movie.getMovieSuggestions = ({ user_id, genres }, callback) => {
    let query = `
        SELECT m.id, m.title, m.description, m.year, ROUND(AVG(r.rating),2) as rating FROM movie m
        LEFT JOIN rating r ON m.id = r.movie_id
        LEFT JOIN movie_genre mg ON m.id = mg.movie_id
        WHERE mg.genre_id IN (?) AND rating >= 4
        GROUP by m.id
        ORDER BY rating DESC
        LIMIT 10;
    `;

    sql.query(query, [genres], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Movie.updateMovie = ({ movie_id, data }, callback) => {
    sql.query(
        "UPDATE movie SET title = ?, description = ?, year = ? WHERE id = ?",
        [data.title, data.description, data.year, movie_id],
        function (error, result) {
            if (error) {
                console.log("error: ", error);
                return callback({ error });
            }
            callback({ result });
        });
};

Movie.deleteById = ({ movie_id }, callback) => {
    sql.query("DELETE FROM movie WHERE id = ?", [movie_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

module.exports = Movie;