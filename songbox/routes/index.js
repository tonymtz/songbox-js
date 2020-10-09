var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  const cookie = req.body
  res.cookie(cookie.name, cookie.value).send('Cookie is set')
})

module.exports = router;
