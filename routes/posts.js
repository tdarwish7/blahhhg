
var express = require('express');
var router = express.Router();

router.get('/posts', getPosts);
router.get('/posts/:postId', getSpecificPosts);
router.post('/posts', createPosts);
router.put('/posts/:postId', updatePost);
router.delete('/posts/:postsId', deletePost);

module.exports = router;

function getPosts(req, res, next){
  console.log('getting all the posts');
  next();
}

function getSpecificPosts(req, res, next){
  console.log('get a particular post');
  next();
}

function createPosts(req, res, next){
  console.log('creating a Post');
  next();
}

function updatePost(req, res, next){
  console.log('updating a Post');
  next();
}

function deletePost(req, res, next){
  console.log('delete a Post');
  next();
}
