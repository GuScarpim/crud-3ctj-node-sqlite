const express = require('express');
const app = express();
const port = 3000;
const productsRoutes = require('./routes/products');

app.use(express.json());

app.use('/', productsRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});