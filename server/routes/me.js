const express = require('express');
const dropbox = require('dropbox');

const router = express.Router();
const auth = require('../middleware/auth');

const { insertUser } = require('../models/users');

router.get('/me', auth, async(req, res) => {
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

        const { account_id, email } = userAccount.result;
        await insertUser({ account_id, email });

        res.status(200).send(finalUserAccount);

    } catch (error) {
        res.status(401).json(error);
    }
});

module.exports = router;