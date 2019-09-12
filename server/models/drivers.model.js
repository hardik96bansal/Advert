const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

const DriverSchema = new Schema({
    userId : {
        type : ObjectId,
        required : true
    }
    ,toBeDeleted : {
        type : String,
        unique : true
    }
})

module.exports = mongoose.model('driver', DriverSchema)