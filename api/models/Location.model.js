const sql = require('../db');

const Location = function (movie_id, location) {
    this.movie_id = movie_id;
    this.location = location;
};

Location.getSingle = ({ location_id }, callback) => {
    sql.query("SELECT * FROM location WHERE id = ?", [location_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

Location.getLocations = (callback) => {
    sql.query("SELECT * FROM location ORDER BY movie_id", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Location.addLocation = function (newLocation, callback) {
    sql.query("INSERT INTO location set ?", newLocation, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ location: result });
    });
};

Location.updateLocation = ({ location_id, data }, callback) => {
    sql.query("UPDATE location SET location = ? WHERE id = ?", [data.location, location_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Location.deleteById = ({ location_id }, callback) => {
    sql.query("DELETE FROM location WHERE id = ?", [location_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Location.deleteByMovieId = ({ movie_id }, callback) => {
    sql.query("DELETE FROM location WHERE movie_id = ?", [movie_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

module.exports = Location;