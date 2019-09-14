const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const DriverSchema = new Schema({
    userId : {
        type : ObjectId,
        required : true,
        ref : 'User'
    },

    vehicles : [{type: ObjectId, ref:'Vehicle'}]
})

module.exports = mongoose.model('driver', DriverSchema)