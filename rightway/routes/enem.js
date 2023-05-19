const express = require('express');
const router = express.Router();
const enemController = require('../controllers/enem');

router.get('/', enemController.renderizarEnem);
router.post('/', enemController.processarEnem);

module.exports = router;