var mongoose = require('mongoose');

// create a working mongoose MODEL so it knows how to store our data
// the model name is Todo
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        // trim property trims off white space
        trim: true

    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};