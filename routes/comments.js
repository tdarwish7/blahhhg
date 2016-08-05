
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment.js');

router.get('/comments/:postId', getCommentsForAPost);
router.post('/comments', createComment);
router.put('/comments/:commentId', updateComment);
router.delete('/comments/:commentId', deleteComment);

module.exports = router;


function getCommentsForAPost(req, res, next){
  Comment.find({post: req.params.postId}, function(err, comments){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      if(comments){
        res.status(200).json({
          comments: comments
        });
      } else {
        res.status(404).json({
          msg: "Could not find"
        });
      }
    }
  });
}

function createComment(req, res, next){
  var comment = new Comment({
      author: req.body.author,
      body: req.body.body,
      post: req.body.post,
      created: new Date(),
      updated: new Date()
  });
  comment.save(function(err, newComment){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        newComment: newComment
      });
    }
  });
}

function updateComment(req, res, next){
  Comment.findOneAndUpdate({ _id: req.params.commentId }, req.body, function(err, oldComment){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldComment: oldComment
      });
    }
  });
}

function deleteComment(req, res, next){
  Comment.remove({ _id: req.params.commentId}, function(err, oldComment){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldComment: oldComment
      });
    }
  });
}
