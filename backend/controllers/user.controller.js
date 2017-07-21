var express  = require('express');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var passport = require('passport');
var User 	 = require('../models/user.model');
var userService = require('../services/user.service');
var api 	 = express.Router();

api.get('/', getAll);
api.get('/:uname', getUser);
api.post('/register', register);
api.post('/login', login);

function getAll(req, res) {
	userService.getAll()
		.then(function (users){
			res.json(users);
		})
		.catch(function (err){
			res.status(400).json(err);
		})
}

function getUser(req, res){
	userService.getByUser(req.params.uname)
		.then(function (user){
			res.json(user);
		})
		.catch(function (err){
			res.status(400).json(err);
		})
}

function register(req, res) {
	userService.create(req.body.uname, req.body.email, req.body.password)
		.then(function(){
			res.status(200).json({ success: true, message: 'User Created!' });
		})
		.catch(function(err){
			res.status(400).send(err); 
		})
}

function login (req, res){
	var login     = {};
	var email     = req.body.email;
	var password  = req.body.password;
	userService.authenticate(email, password)
		.then(function(user){
			if (user){
				login.token = user.token;
				login.uname = user.uname;
				login.message = "Logged in successfully";
			} else {
				login.message = "Wrong password entered";
			}
			res.json(login);
		})
}

module.exports = api;