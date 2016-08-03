
var express = require('express');
var router = express.Router();

router.get('/comments/:postId', getCommentsForAPost);
router.post('/comments', createComment);
router.put('/comments/:commentId', updateComment);
router.delete('/comments/:commentId', deleteComment);

module.exports = router;


function getCommentsForAPost(req, res, next){
  console.log('getting all of the comments');
  next();
}

function createComment(req, res, next){
  console.log('create all comments');
  next();
}

function updateComment(req, res, next){
  console.log('update your comments');
  next();
}

function deleteComment(req, res, next){
  console.log('delete your comments');
  next();
}
