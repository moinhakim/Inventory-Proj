const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const Customer = require('../models/Customer');

// Total Products
router.get('/products/count', async (req, res) => {
    const count = await Product.countDocuments();
    res.json({ count });
});

// Total Orders
router.get('/orders/count', async (req, res) => {
    const count = await Order.countDocuments();
    res.json({ count });
});

// Total Customers
router.get('/customers/count', async (req, res) => {
    const count = await Customer.countDocuments();
    res.json({ count });
});

// Total Revenue
router.get('/revenue', async (req, res) => {
    const orders = await Order.find();
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    res.json({ total: totalRevenue });
});

module.exports = router;
