// =====================================================================
// EXTERNAL MODULES IMPORTS
// =====================================================================

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose');

// =====================================================================
// LOCAL MODULES IMPORTS
// =====================================================================

var User 	 = require('../models/user.model');

// =====================================================================

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function(username, password, done){
        User.findOne({email: username }, function(err, user){
            if (err) return done(err);
            // Return if no user found
            if (!user){
                return done(null, false, {
                    message: 'User not found'
                });
            }

            // Return if user found
            if (!user.verifyPassword(password)){
                return done(null, false, {
                    message: "Password is wrong"
                });
            }

            // Return the user object, if password is correct
            return done(null, user);
        })
    }
))