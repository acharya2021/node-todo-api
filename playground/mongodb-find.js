const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // fetch your required data in the form of an array. Use promises
    // Todos is the name of the collection
    // db.collection('Todos').find().count().then((count) => {
    //
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // display the data
    db.collection("Users").find({name: "Taylor Swift"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err);
    });

    // display the count
    db.collection("Users").find({name: "Taylor Swift"}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log("Unable to fetch users", err);
    });

    // db.close();
});