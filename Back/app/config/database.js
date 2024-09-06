const sqlite3 = require('sqlite3');

// const db = new sqlite3.Database(':memory:');
const db = new sqlite3.Database('./my-dabatabase.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    url TEXT,
    produto TEXT,
    preco INT
    )`);
});

module.exports = db;