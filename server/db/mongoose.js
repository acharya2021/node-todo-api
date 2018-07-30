var mongoose = require('mongoose');

// configure mongoose by setting it up to use promises
// and connecting to the database

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};

