const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userID = '5b58767cfef5ea224c0354c4';

//
// var id = '5b5d9df1b0a34a3f641181df11';
//
// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("ID not found!");
//     }
//     console.log("Todo by ID", todo);
// }).catch((e) => console.log(e));


User.findById(userID).then((user) => {
    if (!user) {
        return console.log("User doesn't exist");
    }
    console.log("User by ID: ", JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));