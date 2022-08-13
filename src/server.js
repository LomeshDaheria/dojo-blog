const express = require("express");
// import express from "express";
const mongoose = require("mongoose");
// import mongoose from "mongoose";
const Blogs = require("../routes/blog.js");
const cors = require("cors");
const Blog = require("../model/blogs.js");
// import { Blogs } from "../routes/blog.js";
// import cors from "cors";
const app = express();

const port = 4000;
const dbUri = "mongodb://localhost:27017/my_dojo";
const dbOptions = {

};

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/blogs", Blogs);



app.listen(port, async() => {
    await mongoose.connect(dbUri, dbOptions);
    console.log("sab changa sii");
});