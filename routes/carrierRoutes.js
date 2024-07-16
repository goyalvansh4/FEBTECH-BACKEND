const express = require('express');
const router = express.Router();
const multerConfig = require('../middleware/multercareeir');
const carrierController = require('../controllers/carrierController');

// POST /api/carrier/create
router.post('/create', multerConfig.single('file'), carrierController.createCarrier);

// GET /api/carrier/
router.get('/', carrierController.getAllCarriers);

module.exports = router;





