const Carrier = require('../models/carrierModel');
const { sendCarrierEmail } = require('../utils/sendEmail');

exports.createCarrier = async (req, res) => {
    try {
        const { name, email, mobile, applyFor } = req.body;
        const file = req.file.path;

        const carrier = new Carrier({ name, email, mobile, applyFor, file });
        await carrier.save();

        sendCarrierEmail(name, email, mobile, applyFor, file, (error, info) => {
            if (error) {
                return res.status(500).json({ status: "error", message: error.message });
            }
            res.status(200).json({ status: "success", message: "Carrier created and email sent successfully", info });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllCarriers = async (req, res) => {
    try {
        const carriers = await Carrier.find();
        res.status(200).json(carriers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
