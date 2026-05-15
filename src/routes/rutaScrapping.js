//Este debería ser el puente entre el usuario y el codigo que tenemos.

const express = require('express');
const router = express.Router();
const ctlrCherio = require('../controllers/controladorCherio');

//Acá es el 'endpoint'
router.get('/scrape', ctlrCherio.getLista);

module.exports = router;