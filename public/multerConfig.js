const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the upload directory based on the route
        let uploadPath = 'uploads/';
        if (req.baseUrl.includes('carrier')) {
            uploadPath = 'uploads/carrier/';
        } else if (req.baseUrl.includes('blogs')) {
            uploadPath = 'uploads/blogs/';
        }
        cb(null, uploadPath); 
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const mimetype = allowedFileTypes.test(file.mimetype);
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB limit
    fileFilter: fileFilter
});

// module.exports = upload;
