const express = require('express');
const dropbox = require('dropbox');

const router = express.Router();
const setToken = require('../middleware/setToken');

router.get('/me', setToken, async (req, res) => {
	try {
		const token = req.token;
		const dbx = new dropbox.Dropbox({ accessToken: token });

		const userAccount = await dbx.usersGetCurrentAccount();
		const finalUserAccount = {
			status: userAccount.status,
			result: {
				name: userAccount.result.name,
				email: userAccount.result.email
			},
		};
		res.status(200).send(finalUserAccount);

	} catch (error) {
		res.status(401).json(error);
	}
});

module.exports = router;