const  mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;