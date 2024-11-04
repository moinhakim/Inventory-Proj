const express = require('express');
const connectDB = require('./config/db'); // Import the connection function
require('dotenv').config();

const app = express(); // Initialize the Express application
const metricsRoutes = require('./routes/metricsRoutes');



// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());


// Import routes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const customerRoutes = require('./routes/customerRoutes');
const reportRoutes = require('./routes/reportRoutes');



// Use routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/metrics', metricsRoutes);


// Basic route to test server
app.get('/', (req, res) => {
    res.send('Inventory Project API is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
