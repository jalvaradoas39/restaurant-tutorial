const express = require('express');
const router = express.Router();
const filterController = require('../controllers/filter');

router.get('/', filterController.getNewArrivals);

module.exports = router;
