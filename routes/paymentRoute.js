// Rutas para comprar 
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// para mandar los datos de la compra que hizo el usuario 
router.post('/', paymentController.createPay);

module.exports = router;