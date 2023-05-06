module.exports = {
	jwtSecret: process.env.JWT_SECRET,
	jwtExpire: process.env.JWT_EXPIRE,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY,
	atlasURI: process.env.ATLAS_URI,
};
