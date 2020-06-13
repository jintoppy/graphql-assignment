const express = require('express');
const { fetchProductById,fetchAllProducts,addProduct } = require('../controllers');
const router = express.Router();

router.post('/products', addProduct);
router.get('/products', fetchAllProducts);
router.get('/users/:id', fetchProductById);

module.exports = router;