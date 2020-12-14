const express = require('express');
const dropbox = require('dropbox');

const router = express.Router();

const redirectUrl = `${process.env.API_URL}/auth/dropbox/callback`;
const config = {clientId: process.env.APP_KEY, clientSecret: process.env.APP_SECRET};
const dbx = new dropbox.Dropbox(config);

router.get('/dropbox', (req, res) => {
    const state = Math.floor(Math.random() * 10000000);
    const authUrl = dbx.auth.getAuthenticationUrl(redirectUrl, state, 'code');
    res.redirect(authUrl);
});

router.get('/dropbox/callback', async (req, res) => {
    const {code} = req.query;
    console.log(`code:${code}`);

    try {
        const response = await dbx.auth.getAccessTokenFromCode(redirectUrl, code);
        const token = response.result['access_token'];
        res.redirect(`${process.env.APP_URL}?token=${token}`);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;