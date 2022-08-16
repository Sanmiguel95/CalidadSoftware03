var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola Mundo :D');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
