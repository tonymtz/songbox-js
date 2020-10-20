const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('privacy page!');
});

module.exports = router;