var config   = require('../config'),
    _        = require('lodash'), // A modern JavaScript utility library delivering modularity, performance & extras.
    jwt      = require('jsonwebtoken'),
    bcrypt   = require('bcrypt'),
    Q        = require('q'), // A promise library for JavaScript
    mongoose = require('mongoose'),
    User 	 = require('../models/user.model');

var service = {};
mongoose.Promise = require('q').Promise;

service.authenticate = authenticate;
service.getAll       = getAll;
service.getByUser    = getByUser;
service.create       = create;

module.exports = service;

function authenticate (email, password) {
    return User.findOne({ email: email }).then(function (user) {
        // condition to check whether user found and hash password matched
        if (user && bcrypt.compareSync(password, user.password)) {
            // authentication successfully
            var user = {
                uname : user.uname,
                token : user.generateJwt()
            }
            return (user);
        }
    });
}

function getAll(){
    return User.find().exec().then(function (users){
        users = _.map(users, function(user){
            return _.pick(user, "_id", "uname", "email", "created_at", "updated_at");
        });
        return(users);
    });
}

function getByUser(uname){
    return User.findOne({ uname: uname }).exec(/*include a function to show all card*/);
}

function create(uname, email, password) {
	var user 	  = new User({
        uname 	  : uname,
	    email 	  : email,
        password  : password,
    });
	return user.save();
}