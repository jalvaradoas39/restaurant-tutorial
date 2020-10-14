exports.create = async (req, res) => {
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);
    console.log('req.user: ', req.user);

    res.json({
        message: 'Inside productController',
    });
};
