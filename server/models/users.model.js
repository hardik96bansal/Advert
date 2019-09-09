const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    mobileNumber : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    }, 
    password : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true
    },
    hash : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('User', userSchema);
