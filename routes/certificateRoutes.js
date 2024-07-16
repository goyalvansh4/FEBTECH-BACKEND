const express = require('express');
const { uploadCertificate, verifyCertificate } = require('../controllers/certificateController');
const upload = require('../middleware/multer');
const router = express.Router();

// Admin route to upload certificate details
router.post('/upload-certificate', upload.single('fileUpload'), uploadCertificate);

// Route to verify certificate details using certificateId
router.get('/verify/:certificate_Id', verifyCertificate);

module.exports = router;
