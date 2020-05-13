const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signupController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email already exists',
            });
        }

        const newUser = new User();
        newUser.username = username;
        newUser.email = email;

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        res.json({
            successMessage: 'Registration success. Please signin.',
        });
    } catch (err) {
        console.log('signupController error: ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }
};

exports.signinController = async (req, res) => {
    console.log('Inside signinController');
};
