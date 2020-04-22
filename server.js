const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes);

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
