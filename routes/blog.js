const express = require("express");
const Blog = require("../model/blogs.js");
const router = express.Router();
let id;


router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        id = Number(id);
        // console.log("get request");
        const blog = await Blog.find({ id });
        res.status(201).send(blog);
    } catch (err) {
        console.log(err.message);
    }
});


router.get("/", async(req, res) => {
    try {

        const blogs = await Blog.find();
        res.send(blogs);
    } catch (err) {
        console.log(err);
    }

});


router.post("/create", async(req, res) => {
    const { title, body, author } = req.body;
    // console.log(req.body);
    id = Math.round(Math.random() * 100000000);
    const post = await Blog.create({ id, title, body });
    res.send(post);
});

router.delete("/:id", async(req, res) => {
    const id = Number(req.params.id);
    try {
        const blog = await Blog.find({ id });
        await Blog.deleteOne(...blog);
        res.send("succesfully deleted");
    } catch (err) {
        console.log(err);
    }

});

// export const Blogs = router;
module.exports = router;