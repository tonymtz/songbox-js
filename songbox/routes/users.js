var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/auth', (req, res) => {
  console.log('this is my GET request in /auth')
  res.render('auth', { clientId: process.env.CLIENT_ID })
})

router.post('/auth', (req, res) => {
  console.log('this is my POST request on /auth')
  res.render('auth', { clientId: process.env.CLIENT_ID })
})

module.exports = router;
