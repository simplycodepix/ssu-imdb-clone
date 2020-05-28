const sql = require('../db');

const User = function (user) {
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.age = user.age;
    this.sex = user.sex;
    this.created_at = new Date();
};

User.getSingle = ({ user_id }, callback) => {
    sql.query("SELECT * FROM users WHERE id = ?", [user_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

User.addUser = (user, callback) => {
    sql.query("INSERT INTO users set ?", user, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ user: result.insertId });
    });
};

User.getUserWithAllRelatedData = ({ user_id }, callback) => {

    let query = `
        SELECT u.id, u.username, r.rating, m.id, m.title as movie_id FROM users u 
        LEFT JOIN rating r ON u.id = r.user_id
        LEFT JOIN movie m ON m.id = r.movie_id
        WHERE u.id = ?;
    `;

    sql.query(query, [parseInt(user_id)], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ user: result });
    });
};

User.getUsers = (callback) => {
    sql.query("SELECT * FROM users", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

User.findById = function ({ id }, callback) {
    sql.query("SELECT * FROM users WHERE id = ?", [id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

User.findByEmailOrUsername = function ({ email = "", username = "" }, callback) {
    sql.query("SELECT * FROM users WHERE `email` = ? OR `username` = ? LIMIT 1", [email, username], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

User.findByLogin = function ({ login = "" }, callback) {
    sql.query("SELECT * FROM users WHERE `email` = ? OR `username` = ? LIMIT 1", [login, login], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

User.getRatedMovies = function ({ user_id }, callback) {
    let query = `
        SELECT DISTINCT m.id, m.title, m.description, m.year, 
            GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genres, 
            GROUP_CONCAT(DISTINCT l.location SEPARATOR ', ') AS locations, r.rating FROM rating r
        LEFT JOIN movie m on m.id = r.movie_id
        LEFT JOIN movie_genre mg ON m.id = mg.movie_id
        LEFT JOIN genres g ON g.id = mg.genre_id
        LEFT JOIN location l ON l.movie_id = m.id
        WHERE user_id = ?
        GROUP BY m.title, mg.movie_id, l.movie_id
        ORDER BY m.id
    `;

    sql.query(query, [user_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

User.getLimitedUserData = function (user) {
    return {
        id: user.id,
        username: user.username,
        fullName: user.firstName + " " + user.lastName,
        email: user.email,
        age: user.age,
        sex: user.sex,
        role: user.role
    };
};

User.getUsersRatingByMovie = (movie_id, callback) => {
    let query = `
        SELECT u.id, u.firstName, u.lastName, r.rating FROM users u 
        LEFT JOIN rating r ON u.id = r.user_id
        WHERE r.movie_id = ?
    `;

    sql.query(query, [parseInt(movie_id)], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

User.updateUser = ({ user_id, data }, callback) => {
    sql.query(
        "UPDATE users SET username = ?, email = ?, firstName = ?, lastName = ?, sex = ?, age = ?, password = ? WHERE id = ?",
        [data.username, data.email, data.firstName, data.lastName, data.sex, data.age, data.password, user_id],
        function (error, result) {
            if (error) {
                console.log("error: ", error);
                return callback({ error });
            }
            callback({ result });
        });
}

User.deleteUser = ({ user_id }, callback) => {
    sql.query("DELETE FROM users WHERE id = ?", [user_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};


module.exports = User;