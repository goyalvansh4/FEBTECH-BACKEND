const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const multerConfig = require('../middleware/multerConfig');

router.post('/create', multerConfig.single('image'), blogController.createBlog);
router.get('/', blogController.getAllBlogs);

module.exports = router;





