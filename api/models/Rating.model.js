const sql = require('../db');

const Rating = function (movie_id, user_id, rating) {
    this.movie_id = movie_id;
    this.user_id = user_id;
    this.rating = rating;
};

Rating.getSingle = ({ movie_id, user_id }, callback) => {
    sql.query("SELECT * FROM rating WHERE movie_id = ? AND user_id = ?", [movie_id, user_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

Rating.getRatings = (callback) => {
    sql.query("SELECT * FROM rating ORDER BY movie_id", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Rating.addRating = function (newRating, callback) {
    sql.query("INSERT INTO rating set ?", newRating, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ rating: result });
    });
};

Rating.getMostRatedGenre = ({ user_id }, callback) => {
    let user = `${user_id ? 'AND r.user_id = ?' : ''}`;

    let query = `
        SELECT ROUND(AVG(r.rating), 2) as rating, g.name, g.id as genre_id
        FROM rating r 
        LEFT JOIN movie m on m.id = r.movie_id
        LEFT JOIN movie_genre mg ON m.id = mg.movie_id
        LEFT JOIN genres g ON g.id = mg.genre_id
        WHERE g.name IS NOT NULL ${user}
        GROUP BY mg.genre_id 
        ORDER BY rating DESC
        LIMIT 5
    `;

    sql.query(query, [user_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Rating.getAverageRatingByLocationAndYear = ({ countries = [], years }, callback) => {

};

Rating.updateRating = ({ ids, data }, callback) => {
    sql.query(
        "UPDATE rating SET rating = ? WHERE movie_id = ? AND user_id = ?",
        [data.rating, ids.movie_id, ids.user_id],
        function (error, result) {
            if (error) {
                console.log("error: ", error);
                return callback({ error });
            }
            callback({ result });
        });
}

Rating.deleteRatingByUserOrMovie = ({ user_id, movie_id }, callback) => {
    sql.query("DELETE FROM rating WHERE user_id = ? OR movie_id = ?", [user_id, movie_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Rating.deleteRating = ({ user_id, movie_id }, callback) => {
    sql.query("DELETE FROM rating WHERE user_id = ? AND movie_id = ?", [user_id, movie_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

module.exports = Rating;