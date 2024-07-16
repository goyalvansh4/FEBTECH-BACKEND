const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  certificate_Id: { type: String, required: true, unique: true },
  issueDate: { type: Date, required: true },
  fileUpload: { type: String},
});

const Certificate = mongoose.model('Certificate-Data', certificateSchema);

module.exports = Certificate;
