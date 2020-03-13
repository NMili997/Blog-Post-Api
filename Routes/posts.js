const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
  res.send('This is page with posts');

  req.console.log('data');
})

module.exports = router;
