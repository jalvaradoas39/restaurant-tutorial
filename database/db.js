const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mern-crud-user:QKHqfvUFtrRHWuLW@mern-tutorial-f0np3.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection success');
    } catch (err) {
        console.log(err.message);
    }
}


module.exports = connectDB;
