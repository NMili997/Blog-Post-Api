const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Here we are on page with comments for cliked postId');
  req.console.log('data');
})
 module.exports = router;
