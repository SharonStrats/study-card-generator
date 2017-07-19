var express  = require('express');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var User 	 = require('../models/userModel');
var api 	 = express.Router();

api.get('/', function (req, res) {
	User.find(function (err, users) {
		err ? res.send(err) : res.json(users); 
	})
})

api.post('/register', function (req, res) {
	var user 	  = new User();
	user.name 	  = req.body.name;
	user.email 	  = req.body.email;
	user.password = req.body.password;
	user.save(function (err) {
		var token = user.generateJwt();
		err ? res.send(err) : res.json({ success: true, message: 'User Created!', token: token})
	})
})

api.post('/login', function (req, res){
	var login     = {};
	var email     = req.body.email;
	var password  = req.body.password;
	User.findOne({'email': email}, function (err, user){
		if (err) return console.log(err);
		user.verifyPassword(req.body.password, function (err, isMatch){
			login.success = isMatch;
			if (isMatch){
				login.message = "Logged in successfully";
			} else {
				login.message = "Invalid password entered";
			}
			res.json(login);
		})
	})
})

module.exports = api;