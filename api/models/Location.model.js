const sql = require('../db');

const Location = function (movie_id, location) {
    this.movie_id = movie_id;
    this.location = location;
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

module.exports = Location;