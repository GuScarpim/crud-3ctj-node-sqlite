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

const getUsersById = (req, response) => {
  /**
   * Façam a busca por id utilizando o mesmo padrão das outras controllers
   */
}

const createUsers = (req, res) => {
  const { id = this.lastID, name, lastName, age, email } = req.body;

  const sql = "INSERT INTO users (id, name, lastName, age, email) VALUES (?, ?, ?, ?, ?)";

  db.run(sql, [id, name, lastName, age, email], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: { id, name, lastName, age, email }
    });
  });
}

const updateUsers = (req, response) => {
  const { id } = req.params;
  const { name, lastName, age, email } = req.body;

  const sql = "UPDATE users SET name = ?, lastName = ?, age = ?, email = ? WHERE id = ?";

  db.run(sql, [name, lastName, age, email, id], (err) => {
    if (err) {
      response.status(500).json({ error: err.message });
      return;
    }

    response.json({
      message: 'success',
      data: { id, name, lastName, age, email },
      changes: this.changes
    });
  });
}

const deleteUsers = (req, response) => {
  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id = ?";

  db.run(sql, id, (err) => {
    if (err) {
      response.status(500).json({ error: err.message });
      return;
    }

    response.json({
      message: 'Deletado!',
      changes: this.changes
    });
  });
}

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
}