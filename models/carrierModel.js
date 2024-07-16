// const mongoose = require('mongoose');

// const CarrierSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     mobile: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     applyFor: {
//         type: String,
//         required: true
//     },
//     file: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('Carrier', CarrierSchema);


const mongoose = require('mongoose');

const CarrierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    applyFor: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Carrier', CarrierSchema);

