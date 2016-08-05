
var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');

router.get('/posts', getPosts);
router.get('/posts/:postId', getSpecificPosts);
router.post('/posts', createPosts);
router.put('/posts/:postId', updatePost);
router.delete('/posts/:postId', deletePost);

module.exports = router;

function getPosts(req, res, next){
  Post.find(function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
}

function getSpecificPosts(req, res, next){
  Post.findOne({ _id: req.params.postId}, req.body, function(err, post){
      if(err){
        res.status(500).json({
          msg: err
        });
      } else {
        res.status(200).json({
          post: post
        });
      }
  });
}

function createPosts(req, res, next){
  var post = new Post({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    created: new Date(),
    updated: new Date()
  });
  post.save(function(err, newPost){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        post: newPost
      });
    }
  });
}

function updatePost(req, res, next){
  Post.findOneAndUpdate({ _id: req.params.postId }, req.body, function(err, oldPost){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldPost: oldPost
      });
    }
  });
}

function deletePost(req, res, next){
  Post.remove({ _id: req.params.postId}, function(err, oldPost){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldPost: oldPost
      });
    }
  });
}
