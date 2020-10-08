var express = require('express');
var router = express.Router();

const dropbox = require('dropbox')

const dbx = new dropbox.Dropbox({ clientId: process.env.CLIENT_ID })

router.get('/auth', (req, res) => {
  res.render('auth', { dropbox: dbx })
})

router.post('/auth', (req, res) => {
  const token = req.body.token
  const dbx = new dropbox.Dropbox({ accessToken: token })

  console.log(dbx)
})

router.get('/files', (req, res) => {
  res.render('files')
})

router.post('/files', (req, res) => {
  const token = req.body.token
  const dbx = new dropbox.Dropbox({ accessToken: token })

  dbx.filesListFolder({ path: '' })
    .then(function (response) {
      res.status(201).send({ dropbox: response })
    })
    .catch(function (error) {
      res.status(400).send({ error })
    });
})

module.exports = router;
