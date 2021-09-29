const express = require('express');
const router = express.Router();
const filterController = require('../controllers/filter');

router.get('/', filterController.getNewArrivals);
router.post('/search', filterController.searchByQueryType);

module.exports = router;
