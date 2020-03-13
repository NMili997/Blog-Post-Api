const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  username: String,
  title: String
})

module.exports = mongoose.model('Posts' , PostSchema);
