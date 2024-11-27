const sqlite3 = require('sqlite3').verbose();

// Open the database
let db = new sqlite3.Database('jdbc:sqlite:identifier.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

module.exports = db;
