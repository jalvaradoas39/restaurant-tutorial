const Category = require('../models/Category');

exports.create = async (req, res) => {
    const { category } = req.body;

    try {
        let newCategory = new Category();
        newCategory.category = category;

        newCategory = await newCategory.save();

        res.status(200).json({
            successMessage: `${newCategory.category} was created!`,
        });
    } catch (err) {
        console.log('category create error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};
