var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
//var profile = mongoose.model('profile');



users = [{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]


posts = [{
    image: "https://blog-6aa0.kxcdn.com/wp-content/uploads/2017/04/Travel-Photography.jpg",
    title: "My new Favorite Mountian"

  }, {
    image: "https://d1btnptfa0r0eu.cloudfront.net/wp-content/uploads/2017/10/868-Transylvania-634.jpg",
    title: "Yesterday's Castle"

  }]

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  // And insert something like this instead:
//  res.json(posts);
//});

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) { return next(err); }
    res.json(posts);
  });
});




//router.put('/comments/:comment/upvote', function(req, res, next) {
//  console.log("upvote, request", req)
//  req.comment.upvote(function(err, comment) {
//    if (err) { return next(err); }
//    console.log("returned comment", comment)
//    res.json(comment);
//  });
//});

// POST method route
//router.post('/post', function (req, res) {
//  posts.push(req.body)  
//  res.send('POST request to the homepage')
//  console.log("post req",req.body)
//})

router.post('/posts', function(req, res, next) {
  console.log(req.body);
  var post = new Post(req.body);
  post.save(function(err, post) {
    if (err) { return next(err); }
    res.json(post);
  });
});

module.exports = router;

