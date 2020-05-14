const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const app = express();
const port = 8042;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'imdb_clone'
});

// connect to database
mc.connect();

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(cookieParser());
// app.use('/music', express.static('music'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Welcome on board');
});

app.server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;