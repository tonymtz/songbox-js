const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/landing/home-desktop-app.html'));
});

router.post('/', (req, res) => {
    const cookie = req.body;
    res.cookie(cookie.name, cookie.value).status(200).json({ message: 'Cookie is set' });
});

module.exports = router;