const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//here we get all the post
router.get('/', async (req, res)=>{
  try {
    //find is mongoose method
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({message: err});
  }
});

router.post('/', async (req,res) => {
  const post = new Post({
    username: req.body.username,
    title: req.body.title
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({message: err});
  }
})

module.exports = router;