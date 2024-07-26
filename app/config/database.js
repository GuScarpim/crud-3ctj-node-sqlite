const sqlite3 = require('sqlite3');

// const db = new sqlite3.Database(':memory:');
const db = new sqlite3.Database('./my-dabatabase.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    lastName TEXT,
    age INT,
    email TEXT
    )`);
});

module.exports = db;