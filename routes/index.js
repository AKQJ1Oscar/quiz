var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', url: 'https://github.com/AKQJ1Oscar/quiz' });
});

router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Créditos', autor: 'Óscar Vázquez Babón', foto: 'https://avatars3.githubusercontent.com/u/16836716', url: 'https://github.com/AKQJ1Oscar/quiz' });
});

module.exports = router;