// backend/routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const { getSummaryData } = require('../controllers/reportController');

router.get('/summary', getSummaryData);

module.exports = router;
