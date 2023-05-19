const express = require('express');
const router = express.Router();
const vestiController = require('../controllers/vestibulares');

router.get('/', vestiController.renderizarVesti);
router.post('/', vestiController.processarVesti);

module.exports = router;