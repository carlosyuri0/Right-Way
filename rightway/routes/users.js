var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuario');

router.get('/login', usuarioController.formularioLogin);
router.post('/login', usuarioController.Login);

router.get('/cadastro', usuarioController.formularioCadastro);
router.post('/cadastro', usuarioController.Cadastro);

 //router.post('/cadastro', usuarioController.processarformularioCadastro);

module.exports = router;
