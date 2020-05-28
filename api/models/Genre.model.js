const sql = require('../db');

const Genre = function (genre) {
    this.title = genre.name;
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

module.exports = Genre;