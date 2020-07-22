const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, categoryController.create);

module.exports = router;
