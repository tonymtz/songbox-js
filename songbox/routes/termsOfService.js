const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('terms of service!');
});

module.exports = router;