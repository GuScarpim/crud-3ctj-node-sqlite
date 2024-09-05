const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const productsRoutes = require('./routes/products');

// Habilitar CORS para localhost:3000
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use('/', productsRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
