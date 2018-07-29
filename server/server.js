// LIBRARY IMPORTS
var express = require('express');
var bodyParser = require('body-parser');

// LOCAL IMPORTS
var {mongoose} = require('./db/mongoose');
// load in Todo and User
// create a variable using destructuring
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// create a variable called app to store our express application
var app = express();

// configure the middleware
app.use(bodyParser.json());

// configure your routes
// create a POST route to let us create Todos

app.post('/todos', (req, res) => {
    // the body gets stored by bodyParser
    // console.log(req.body);

    // create a todo using information that comes from the user
    // that means create an instance of the mongoose model
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});


// this is a very basic server
app.listen(3000, () => {
    console.log('Started on port 3000');
});

// export the app
module.exports = {app};