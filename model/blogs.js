const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    id:Number,
    title:String,
    body:String
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;