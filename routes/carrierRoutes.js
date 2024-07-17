const express = require('express');
const router = express.Router();
const carrierController = require('../controllers/carrierController');
const upload = require('../middleware/multercareer');

router.post('/create', upload.single('file'), carrierController.createCarrier);
router.get('/all', carrierController.getAllCarriers);

module.exports = router;
