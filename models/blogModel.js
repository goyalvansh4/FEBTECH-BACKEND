const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
    
});

module.exports = mongoose.model('Blog', BlogSchema);


