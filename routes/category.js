const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, categoryController.create);
router.get('/', authenticatateJWT, categoryController.readAll);

module.exports = router;
