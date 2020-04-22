const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    console.log('Inside signup controller');
});

module.exports = router;
