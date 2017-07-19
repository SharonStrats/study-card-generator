var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var jwt      = require('jsonwebtoken');
var SALT_WORK_FACTOR = 10;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    created_at: Date,
    updated_at: Date
})

userSchema.pre('save', function(next) {
    var user = this;
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt){
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash){
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
})

userSchema.methods.verifyPassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

userSchema.methods.generateJwt = function() {
    var expire = new Date();
    expire.setDate(expire.getDate() + 7);

    return jwt.sign({
        _id  : this._id,
        email: this.email,
        name : this.name,
        exp  : parseInt(expire.getTime() / 1000)
    }, 'TEST_SECRET') //TODO: move this secret key to environment
}

module.exports = mongoose.model('User', userSchema);