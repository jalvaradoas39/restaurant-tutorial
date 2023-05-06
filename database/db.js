const mongoose = require('mongoose');
const { atlasURI } = require('../config/keys');

const connectDB = async () => {
	await mongoose
		.connect(atlasURI, {
			useNewUrlParser: true,
			// useCreateIndex: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('Database connection success!!'))
		.catch(err => console.log('Database connection failed: ', err));
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
