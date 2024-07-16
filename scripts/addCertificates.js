const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Certificate = require('../models/Certificate');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

const addCertificates = async () => {
  await connectDB();

  const certificates = [
    {
      name: 'vansh Gupta',
      email: 'vansh@gmail.com',
      certificateId: '12345',
      issueDate: new Date('2023-01-01'),
      fileUpload: 'path/to/certificate1.pdf',
    },
    {
      name: 'uday Kumar',
      email: 'udayk21342@gmail.com',
      certificateId: '67890',
      issueDate: new Date('2023-02-01'),
      fileUpload: 'path/to/certificate2.pdf',
    },
  ];

  try {
    await Certificate.insertMany(certificates);
    console.log('Certificates added successfully');
  } catch (error) {
    console.error('Error adding certificates:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

addCertificates();
