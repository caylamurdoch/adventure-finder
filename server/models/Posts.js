var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
  title: String,
  likes: { type: Number, default: 0 },
  description: String,
  image_url: String,
  cost: { type: Number, default: 0 },
  place: String,
  uuid: String,
  
});

PostSchema.methods.upvote = function(cb) {
  this.likes += 1;
  this.save(cb);
};

mongoose.model('Post', PostSchema);
