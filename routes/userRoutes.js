const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/sendMail', userController.createUser);
router.get('/allData', userController.getAllUsers);

module.exports = router;



