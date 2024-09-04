const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/products', productsController.getProducts);
router.post('/products', productsController.createProducts);
router.put('/products/:id', productsController.updateProducts);
router.delete('/products/:id', productsController.deleteProducts);

module.exports = router;