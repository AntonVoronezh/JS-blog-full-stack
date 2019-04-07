const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// http://localhost:5000/api/post  (GET)
router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
});



