const Blog = require('../models/blogModel');

exports.createBlog = async (req, res) => {
    try {
        const { title, subtitle, description } = req.body;
        const image = req.file.path;
        const blog = new Blog({ title, subtitle, description, image });
        await blog.save();
        res.status(201).json({ data:blog,message:"success"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ data:blogs,message:"success"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




  

