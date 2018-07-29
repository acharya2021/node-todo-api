// User model
// email: require it, trim it, set type, min length of 1
// create a new user

var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});

//export the variable User created above
module.exports = {User};