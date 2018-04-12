var mongoose = require('mongoose');
// var Kitten = mongoose.model('Kitten', kittySchema);

var schema = new mongoose.Schema({
    email: String,
    password: String
},{
    timestamp: true
}
);
var User = mongoose.model('User', schema);

module.exports = User