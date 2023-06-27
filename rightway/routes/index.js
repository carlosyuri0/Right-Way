var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // exibir os dados da session
  console.log(req.session);

  
  res.render('index', { title: 'Inicio' });
});

module.exports = router;
