var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var commentRouter = require('./routes/comments.js');
var postRouter = require('./routes/posts.js');


var port = process.env.PORT || 8080;


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());
server.use(commentRouter);
server.use(postRouter);

server.get('/', function(req, res){
  res.send('hello!');
});



server.listen(port, function(){
  console.log('Now listening on port... ', port);
});
