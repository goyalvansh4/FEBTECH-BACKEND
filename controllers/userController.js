const User = require('../models/userModel');
const { sendEmail } = require('../utils/sendEmail');

exports.createUser = (req, res) => {
    const { name, email, mobile, message } = req.body;

    const user = new User({ name, email, mobile, message });  this 
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
};

exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => res.status(200).json({ status: "success", data: users }))
        .catch(err => res.status(500).json({ status: "error", message: err.message }));
};

