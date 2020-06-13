const express = require('express');
const {createNewOrder} = require('../controllers/order-controller');
const router = express.Router();

router.post('/order', createNewOrder);
// router.post('/login', loginUser);
// router.get('/users', fetchAllUsers);
// router.get('/users/:id', fetchUserById);

module.exports = router;