const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

exports.create_payment_intent = async (req, res) => {
	const { total } = req.body;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});

	res.status(200).json({
		clientSecret: paymentIntent.client_secret,
	});
};
