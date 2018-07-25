const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // // create an entry or document in the database collection
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     // if no err then pretty print the result
    //     // ops will store all the docs we created
    //     console.log(JSON.stringify(result.ops, undefined, 2));;
    // });
    //
    // db.close();

    // Another block
    // db.collection("Users").insertOne({
    //     name: "Abhisesh",
    //     age: 21,
    //     location: "Rochester NY"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert users", err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));;
    // });
    // db.close();

});