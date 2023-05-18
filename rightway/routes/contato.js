const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contato');

router.get('/', contatoController.renderizarFormulario);
router.post('/', contatoController.processarFormulario);

module.exports = router;