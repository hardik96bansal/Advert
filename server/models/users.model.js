const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    mobileNumber : String,
    email : String, 
    password : String
})

const User = mongoose.model('User', userSchema);

exports.createUser = (userData) => {
    const newUser = new User(userData)
    return newUser.save()
}