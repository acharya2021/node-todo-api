const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // deleteMany
    // db.collection("Todos").deleteMany({text: "Eat Lunch"}).then(
    //     (result) => {
    //         console.log(result);
    //     }
    // );


    // deleteOne: there may be duplicates, just delete one of them
    // db.collection("Todos").deleteOne({text: "Eat Lunch"}).then(
    //     (result) => {
    //         console.log(result);
    //     }
    // );

    // findOneAndDelete: delete a specific one
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // deleteMany on the collection Users
    // db.collection("Users").deleteMany({name: "Abhisesh"}).then(
    //     (result) => {
    //         console.log(result);
    //     }
    // );

    // findOneAndDelete on the Users collection
    db.collection("Users").findOneAndDelete({_id: new ObjectID('5b5707b384900a33b8c5a167')}).then(
        (result) => {
            console.log(result);
        }
    );

    // db.close();
});