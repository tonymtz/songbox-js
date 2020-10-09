const express = require('express');
const dropbox = require('dropbox')

const router = express.Router();
const dbx = new dropbox.Dropbox({ clientId: process.env.CLIENT_ID })

router.get('/auth', (req, res) => {
  res.render('auth', { dropbox: dbx })
})

module.exports = router;
