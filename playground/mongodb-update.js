const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // findOneAndUpdate
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID('5b5849520203819abf90b1e7')
    // }, {
    //     // use the update operator $set
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    // update document in Users
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID('5b5708730f01a03604e432e3')
    }, {
        $set: {
            name: "Narayan Gopal",
            location: "Kathmandu, Nepal",
            // favoriteNum: 25
        },
        $inc: {
            age: 0,
            favoriteNum: 7
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

});