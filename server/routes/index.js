const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: 'Songbox' });
});

router.post('/', (req, res) => {
	const cookie = req.body;
	res.cookie(cookie.name, cookie.value).status(200).json({ message: 'Cookie is set' });
});

module.exports = router;
