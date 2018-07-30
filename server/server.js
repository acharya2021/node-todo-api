// LIBRARY IMPORTS
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

// LOCAL IMPORTS
var {mongoose} = require('./db/mongoose');
// load in Todo and User
// create a variable using destructuring
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// create a variable called app to store our express application
var app = express();
// create a port for deployment to heroku
const port = process.env.PORT || 3000;

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

// register the GET handler using app.get
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });

});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // validate id using isValid
    if (!ObjectID.isValid(id)) {
        // console.log("ID not valid");
        //returns 404 not found error on Postman
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        // even if the query is successful, it might not result
        // in the actual document being returned. So check if it exists
        if (!todo) {
            // return console.log("No todo found");
            return res.status(404).send();
        }
        // console.log("Todo by ID:", todo);
        res.send({todo});

    }, (e) => {
        // console.log("An error occurred!");
        res.status(400).send();
    });

});

// Delete a todo item by ID
app.delete('/todos/:id', (req, res) => {
    // get the id off the request object
    var id = req.params.id;
    // validate the id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //now remove Todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }, (e) => {
        res.status(400).send();
    });
});

// this is a very basic server
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

// export the app
module.exports = {app};