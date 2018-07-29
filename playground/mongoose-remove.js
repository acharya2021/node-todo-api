const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// }, () => {
//
// });
// Todo.findOneAndRemove({id:'asda'}).then()

Todo.findByIdAndRemove('5b5dec920203819abf90e04f').then((todo) => {
    console.log(todo);
}, () => {

});


