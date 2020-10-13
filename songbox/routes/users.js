const express = require('express');
const dropbox = require('dropbox');

const router = express.Router();
const dbx = new dropbox.Dropbox({ clientId: process.env.CLIENT_ID });

const setToken = require('../middleware/setToken')

router.get('/auth', (req, res) => {
	res.render('login', { dropbox: dbx, url: process.env.URL });
})

router.post('/auth', setToken, async (req, res) => {
	try {
		const token = req.token;
		const dbx = new dropbox.Dropbox({ accessToken: token });
		const userAccount = await dbx.usersGetCurrentAccount();

		if (userAccount.status === 200) {
			res.status(200).json({ userAccount });
		} else {
			throw new Error();
		}
	} catch (error) {
		res.status(401).json({ error });
	}
})

module.exports = router;
