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
//Finding specific posty with id
router.get('/:postId' , async (req,res) => {
  try{
  const post = await Post.findById(req.params.postId);
  res.json(post);
}catch(err){
  res.json({ message: err});
}
})
//Delete some post
router.delete('/:postId', async (req,res) =>{
  try{
  const removedPost = await Post.remove({_id: req.params.postId})
  res.json(removedPost);
}catch(err){
  res.json({message: err});
}
})
//Update some post
router.patch('/:postId', async (req,res) =>{
  try{
  const updatedPost = await Post.updateOne
  ({_id: req.params.postId} ,
   {$set: {title: req.body.title} }
 );
  res.json(updatedPost);
}catch(err){
  res.json({message: err});
}
})
module.exports = router;
