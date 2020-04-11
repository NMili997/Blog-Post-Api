const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  body: String
});
module.exports = mongoose.model("Comments", CommentSchema);
