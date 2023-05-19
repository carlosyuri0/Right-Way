var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuario');

router.get('/login', usuarioController.formularioLogin);
// router.post('/login', usuarioController.processarformularioLogin);

router.get('/cadastro', usuarioController.formularioCadastro);

 //router.post('/cadastro', usuarioController.processarformularioCadastro);

module.exports = router;
