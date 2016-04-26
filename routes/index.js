var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', url: 'https://github.com/AKQJ1Oscar/quiz' });
});

/* GET author page */
router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Créditos', autor: 'Óscar Vázquez Babón', foto: 'https://avatars3.githubusercontent.com/u/16836716', url: 'https://github.com/AKQJ1Oscar/quiz' });
});

/* GET question */
router.get('/question', quizController.question);

/* GET check */
router.get('/check', quizController.check);

module.exports = router;