const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment');
//const { authenticateJWT } = require('../middleware/authenticator');

router.post(
	'/payment-intent',
	//authenticateJWT,
	paymentController.create_payment_intent
);

module.exports = router;
