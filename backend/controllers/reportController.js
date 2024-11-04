// backend/controllers/reportController.js
const Product = require('../models/Product');
const Order = require('../models/Order');
const Customer = require('../models/Customer');

exports.getSummaryData = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const totalOrders = await Order.countDocuments();
        const totalCustomers = await Customer.countDocuments();
        const totalRevenue = await Order.aggregate([
            { $group: { _id: null, total: { $sum: "$totalPrice" } } }
        ]);

        res.json({
            totalProducts,
            totalOrders,
            totalCustomers,
            totalRevenue: totalRevenue[0]?.total || 0
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching report summary", error });
    }
};
