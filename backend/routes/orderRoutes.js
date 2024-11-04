const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Routes for orders
router.get('/', orderController.getOrders);               // Get all orders
router.post('/', orderController.createOrder);            // Create a new order
router.get('/:id', orderController.getOrderById);         // Get an order by ID
router.put('/:id', orderController.updateOrder);          // Update an order by ID
router.delete('/:id', orderController.deleteOrder);       // Delete an order by ID

module.exports = router;
