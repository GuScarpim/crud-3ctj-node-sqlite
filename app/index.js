const express = require('express');
const app = express();
const port = 3000;
const usersRoutes = require('./routes/users');

app.use(express.json());

app.use('/', usersRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});