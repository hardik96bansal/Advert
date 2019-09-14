const DriverDbOpers = require('../dbOpers/drivers.dbOpers')
const UserDbOpers = require('../dbOpers/users.dbOpers')

exports.createDriver = (req,res,next) => {
    const newDriver = {userId:req.body.id, toBeDeleted : 'a'}
    DriverDbOpers.createDriver(newDriver)
        .then((result) => {
            UserDbOpers.patchUser(req.body.id, {partnerId : result._id, partnerType : 'D'})
        })
        .then((result) => {
            res.status(200).send({driverId: result})            
        })
        .catch((err) => {
            UserDbOpers.deleteById(req.body.id)
            res.status(401).send({err})
        })
}