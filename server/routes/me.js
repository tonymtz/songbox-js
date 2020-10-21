const express = require('express');
const dropbox = require('dropbox');

const router = express.Router();
const setToken = require('../middleware/setToken');

router.get('/', setToken, async (req, res) => {
	try {
		const token = req.token;
		const dbx = new dropbox.Dropbox({ accessToken: token });

		const userAccount = await dbx.usersGetCurrentAccount();
		res.status(200).send(userAccount);

	} catch (error) {
		res.status(401).json(error);
	}
});

module.exports = router;