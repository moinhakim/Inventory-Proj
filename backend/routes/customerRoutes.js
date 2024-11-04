const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Routes for customers
router.get('/', customerController.getCustomers);            // Get all customers
router.post('/', customerController.createCustomer);         // Create a new customer
router.get('/:id', customerController.getCustomerById);      // Get a customer by ID
router.put('/:id', customerController.updateCustomer);       // Update a customer by ID
router.delete('/:id', customerController.deleteCustomer);    // Delete a customer by ID

module.exports = router;
