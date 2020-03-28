const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
//GET method
router.get('/', async(req,res)=>{
  try {
    const comments = await Comment.find();
    res.json(comments);

  } catch (e) {
    res.json({message: e});
  }
});
//POST method
router.post('/', async(req,res) =>{
  const comment = new Comment({
    body: req.body.body
  });
  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (e) {
      res.json({message: e});
  }
});
//SPECIFIC Comment
router.get('/:postId', async(req,res)=>{
  try {
    const comment = await Comment.find(req.params.postId);
    res.json(comment);
  } catch (e) {
    res.json({message: e});
  }
});
//Delete some comment
router.delete('/:postId', async (req,res) =>{
  try{
  const removedComment = await Comment.remove({_id: req.params.postId})
  res.json(removedComment);
}catch(err){
  res.json({message: err});
}
})
//Update some post
router.patch('/:postId', async (req,res) =>{
  try{
  const updateComment = await Comment.updateOne
  ({_id: req.params.postId} ,
   {$set: {body: req.body.body} }
 );
  res.json(updateComment);
}catch(err){
  res.json({message: err});
}
})
 module.exports = router;
