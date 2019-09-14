const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

const DriverSchema = new Schema({
    userId : {
        type : ObjectId,
        required : true,
        ref : 'User'
    }
})

module.exports = mongoose.model('driver', DriverSchema)