const Product = require('../models/Product');

exports.getNewArrivals = async (req, res) => {
	const sortBy = req.query.sortBy ? req.query.sortBy : 'desc';
	const limit = req.query.limit ? parseInt(req.query.limit) : parseInt(3);

	try {
		const newArrivals = await Product.find({})
			.sort({ createdAt: sortBy })
			.limit(limit);

		res.json({
			newArrivals,
		});
	} catch (err) {
		console.log(err, 'filter Controller.getNewArrivals error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.searchByQueryType = async (req, res) => {
	const { type, query } = req.body;

	try {
		let products;

		switch (type) {
			case 'text':
				products = await Product.find({ $text: { $search: query } });
				break;
		}

		if (!products.length > 0) {
			products = await Product.find({});
		}

		res.json({ products });
	} catch (err) {
		console.log(err, 'filter Controller.searchByQueryType error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
