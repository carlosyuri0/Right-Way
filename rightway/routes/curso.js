const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/curso');

router.get('/', cursoController.renderizarCurso);
router.post('/', cursoController.processarCurso);

module.exports = router;