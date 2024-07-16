
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
    res.json("server is running");
});

app.post('/sendMail', (req, res) => {
    const { name, email, mobile, message } = req.body;

    // Save user to MongoDB
    const user = new User({ name, email, mobile, message });
    user.save()
        .then(savedUser => {
            sendEmail(savedUser.name, savedUser.email, savedUser.mobile, savedUser.message, (error, info) => {
                if (error) {
                    return res.status(500).json({ status: "error", message: error.message });
                }
                res.status(200).json({ status: "success", message: "Email sent successfully", info });
            });
        })
        .catch(err => res.status(500).json({ status: "error", message: err.message }));
});

// New endpoint to get all data from the database
app.get('/allData', (req, res) => {
    User.find()
        .then(users => res.status(200).json({ status: "success", data: users }))
        .catch(err => res.status(500).json({ status: "error", message: err.message }));
});

app.get('*', (req, res) => {
    res.status(404).json({ status: "error", message: "Page Not Found" });
});

app.listen(3000, () => console.log("server is running on port 3000"));




const sendEmail = (name, email, mobile, message, callback) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'udayk21438@gmail.com', // your email address
            pass: 'tbgqncfxpxotdxoh' // your email password or app password
        }
    });

    // Setup email data with unicode symbols
    let mailOptions = {
        from: email, // sender address
        to: 'udayk21438@gmail.com', // list of receivers
        subject: `${name} Contact with Feb IT Contact Us'`,
        text: `You have received a new message from ${name}  
        
        
        ${message}`, // plain text body


        html: ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px;">New Message Received</h2>
            <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Mobile:</strong> ${mobile}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Message:</strong></p>
            <p style="font-size: 14px; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4CAF50;">${message}</p>
        </div>` // html body
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, callback);
};

