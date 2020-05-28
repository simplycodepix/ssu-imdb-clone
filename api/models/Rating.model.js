const sql = require('../db');

const Rating = function (movie_id, user_id, rating) {
    this.movie_id = movie_id;
    this.user_id = user_id;
    this.rating = rating;
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
        SELECT ROUND(AVG(r.rating), 2) as rating, g.name  
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

module.exports = Rating;