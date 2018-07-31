const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$DXPQv1PEO16EZlKo4IRNReLQPf.nYt/Qs/TR4zVpIvla0HG1QY/R.';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };
//
// // takes the object (data with the user id) and creates a hash and returns the token
// // the second argument is the secret
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// // makes sure the data was not manipulated
// // only when the token is unaltered and the secret is the same will we get our data back
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);


// var message = "I am user number 1";
// // Hashing is a way to obfuscate the actual plain text message
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//     id: 4
// };
//
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // the person on the client trying to manipulate the data does not have access to the 'somesecret' salt
// // the secret is only on the server
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log("Data was not changed");
// } else {
//     console.log("Data was changed.");
// }
//
//
//

