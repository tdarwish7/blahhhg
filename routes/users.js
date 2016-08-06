var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.get('/users', getUsers);
router.get('/users/:userId', getSpecificUser);
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

module.exports = router; //makes it usable in node

function getUsers(req, res, next){
  User.find(function(err, users){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users: users
      });
    }
  });
}


function getSpecificUser(req, res, next){
  User.findOne({_id: req.params.userId}, req.body, function(err, user){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        user: user
      });
    }
  });
}

function createUser(req, res, next){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email
  });
  user.save(function(err, newUser){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        newUser: newUser
      });
    }
  });
}

function updateUser(req, res, next){
  User.findOneAndUpdate({ _id: req.params.userId}, req.body, function(err, oldUserInfo){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldUserInfo: oldUserInfo
      });
    }
  });
}

function deleteUser(req, res, next){
  User.remove({ _id: req.params.userId}, function(err, oldUser){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldUser: oldUser
      });
    }
  });
}
