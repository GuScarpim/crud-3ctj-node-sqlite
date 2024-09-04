const db = require('../config/database');

const getProducts = (req, response) => {
  db.all('SELECT * FROM products', (err, rows) => {
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

const getProductsById = (req, response) => {
  /**
   * Façam a busca por id utilizando o mesmo padrão das outras controllers
   */
}

const createProducts = (req, res) => {
  const { name, email, url, produto, preco } = req.body;

  const sql = "INSERT INTO products (name, email, url, produto, preco) VALUES (?, ?, ?, ?, ?)";

  db.run(sql, [name, email, url, produto, preco], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: { id: this.lastID, name, email, url, produto, preco }
    });
  });
}

const updateProducts = (req, response) => {
  const { id } = req.params;
  const { name, email, url, produto, preco } = req.body;

  const sql = "UPDATE products SET name = ?, email = ?, url = ?, produto = ?, preco = ? WHERE id = ?";

  db.run(sql, [name, email, url, produto, preco, id], (err) => {
    if (err) {
      response.status(500).json({ error: err.message });
      return;
    }

    response.json({
      message: 'success',
      data: { id, name, email, url, produto, preco },
      changes: this.changes
    });
  });
}

const deleteProducts = (req, response) => {
  const { id } = req.params;

  const sql = "DELETE FROM products WHERE id = ?";

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
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts
}