const db = require('../config/database');

const getUsers = (req, response) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      response.status(500).json({ error: err.message });
      return;
    }

    response.json({
      message: 'success',
      data: rows
    })
  })
}

const createUsers = (req, response) => {
  const { id = this.lastID, name, lastName, age, email } = req.body;

  const sql = "INSERT INTO users (id, name, lastName, age, email) VALUES (?, ?, ?, ?, ?)"

  db.run(sql, [id, name, lastName, age, email], (err) => {
    if (err) {
      response.status(500).json({ error: err.message });
      return;
    }

    response.json({
      message: 'success',
      data: { id, name, lastName, age, email }
    })
  })
}

module.exports = {
  getUsers,
  createUsers
}