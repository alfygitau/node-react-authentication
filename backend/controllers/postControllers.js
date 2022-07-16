const asyncHandler = require("express-async-handler");
const Post = require("../models/Post");

// @desc get all posts
// @method GET /api/posts
// @access Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });
  res.json(posts);
});

// @desc create post
// @method POST /api/posts
// @access private
const createPost = asyncHandler(async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    user: req.user.id,
    description: req.body.description,
    image: req.body.image,
    author: req.body.author,
    category: req.body.category,
    publisher: req.body.publisher,
  });
  res.status(200).json(post);
});

// @desc update post
// @method GET /api/posts/:id
// @access private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedPost);
});

// @desc delete post
// @method DELETE /api/posts/:id
// @access private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  await post.remove();
  res.status(200).json({ message: "Post removed from the database" });
});

module.exports = { getPosts, createPost, updatePost, deletePost };
