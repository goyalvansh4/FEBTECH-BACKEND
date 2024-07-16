const Certificate = require('../models/Certificate');

// Admin route to upload certificate details
exports.uploadCertificate = async (req, res) => {
  const { name, email,certificate_Id, issueDate } = req.body;
  const fileUpload = req.file ? req.file.path : ' ';

  try {
    const newCertificate = new Certificate({
      name,
      email,
     certificate_Id,
      issueDate,
      fileUpload,
    });

    await newCertificate.save();
    res.status(201).json({ message: 'Certificate uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Route to verify certificate details using certificate_Id
exports.verifyCertificate = async (req, res) => {
  try {
    const {certificate_Id}  = req.params;
    console.log(certificate_Id,28)
    if(certificate_Id)

   { const certificate = await Certificate.findOne({certificate_Id});

    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.status(200).json({ message: 'Certificate found', certificate })}
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

