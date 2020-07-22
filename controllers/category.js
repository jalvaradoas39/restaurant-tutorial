exports.categoryController = (req, res) => {
    setTimeout(() => {
        res.json({
            successMessage: `${req.body.category} was created!`,
        });
    }, 5000);
};
