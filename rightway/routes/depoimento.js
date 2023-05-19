const express = require('express');
const router = express.Router();
const depoiController = require('../controllers/depoimentos');

router.get('/', depoiController.renderizarDepoi);
router.post('/', depoiController.processarDepoi);

module.exports = router;