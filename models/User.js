const mongoose = require('mongoose')

function validateEmail(e) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e);
}

// function validatePassword(e) {
//     let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/ ;
//     return passwordPattern.test(e)
// }

const UserSchema = new mongoose.Schema({
    name: {type: String,required: true},

    email: {type: String,required: true,validate:{validator: validateEmail, message: 'Invalid Email'} },

    password: {type: String, required: true }

}, {collection: 'users', versionKey: false})

let UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel