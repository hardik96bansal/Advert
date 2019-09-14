const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const TransactionSchema = new Schema({
    status : String,
    image : String,
    timestamp : Date
})

const VehicleSchema = new Schema({
    driver : {
        type : ObjectId,
        required : true,
        ref : 'Driver'
    },
    registrationNumber : {
        type : String, 
        required : true,
        unique : true
    },
    mappedAdvertiser : {
        type : ObjectId
    },
    transactions : [TransactionSchema],
    type : String
})

module.exports = mongoose.model('Car', VehicleSchema)
