var express = require('express');
var router = express.Router();

const dropbox = require('dropbox');
const dbx = new dropbox.Dropbox({ clientId: process.env.CLIENT_ID });

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
	const cookie = req.body;
	res.cookie(cookie.name, cookie.value).send('Cookie is set');
})

router.get('/login', (req, res) => {
	res.render('login', { dropbox: dbx, url: process.env.URL });
})

router.get('/pricing', (req, res) => {
	res.send('pricing page!')
})

router.get('/privacy', (req, res) => {
	res.send('privacy page!')
})

router.get('/terms-of-service', (req, res) => {
	res.send('terms of service!')
})

module.exports = router;
