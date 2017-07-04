var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    created_at: Date,
    updated_at: Date
})

userSchema.pre('save', (next) => {
    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at){
        this.created_at = currentDate;
    }
})

var User = mongoose.model('User', userSchema);

module.exports = User;