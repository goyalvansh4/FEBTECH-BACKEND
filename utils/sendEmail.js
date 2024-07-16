const nodemailer = require('nodemailer');
const path = require('path');

const sendEmail = (name, email, mobile, message, callback) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'udayk21438@gmail.com',
            pass: 'tbgqncfxpxotdxoh'
        }
    });

    let mailOptions = {
        from: email,
        to: 'udayk21438@gmail.com',
        subject: `${name} Contact with Feb IT Contact Us`,
        text: `You have received a new message from ${name}\n\n${message}`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px;">New Message Received</h2>
            <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Mobile:</strong> ${mobile}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Message:</strong></p>
            <p style="font-size: 14px; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4CAF50;">${message}</p>
        </div>`
    };

    transporter.sendMail(mailOptions, callback);
};

const sendCarrierEmail = (name, email, mobile, applyFor, file, callback) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'udayk21438@gmail.com',
            pass: 'tbgqncfxpxotdxoh'
        }
    });

    let mailOptions = {
        from: email,
        to: 'udayk21438@gmail.com',
        subject: `${name} Carrier Application Received`,
        text: `You have received a new message from ${name}\n\nApply For: ${applyFor}`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0; margin: -20px -20px 20px -20px;">New Message Received</h2>
            <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Mobile:</strong> ${mobile}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Apply For:</strong> ${applyFor}</p>
        </div>`,
        attachments: [
            {
                filename: path.basename(file),
                path: file
            }
        ]
    };

    transporter.sendMail(mailOptions, callback);
};

module.exports = { sendEmail, sendCarrierEmail };


