const express = require('express');
const {createNewOrder, getOrders} = require('../controllers/order-controller');
const router = express.Router();

router.post('/orders', createNewOrder);
router.get('/orders', getOrders);

module.exports = router;