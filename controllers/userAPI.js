var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/userModel');
var api = express.Router();

api.get('/', (req, res) => {
	User.find((err, users) => {
		err ? res.send(err) : res.json(users); 
	})
})

api.post('/signup', (req, res) => {
	var user = new User();
	user.email = req.body.email;
	user.password = req.body.password;
	
	user.save((err) => {
		err ? res.send(err) : res.json({ message: 'User Created!'})
	} )

})

module.exports = api;