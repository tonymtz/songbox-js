const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('pricing page!');
});

module.exports = router;