const UserDbOper = require('../dbOpers/users.dbOpers')
const crypto = require('crypto')

exports.validateUserPassword = (req, res, next) => {
    UserDbOper.findByEmail(req.body.email)
    .then((fetchedUser) => {
        if(fetchedUser[0]) {
            let passwordField = fetchedUser[0].password.split('$');
            let salt = passwordField[0];
            let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest("base64");
            if(hash === passwordField[1]){
                req.body = {
                    userId : fetchedUser[0]._id,
                    email : fetchedUser[0].email,
                    provider : 'email',
                    name : fetchedUser[0].firstname + ' ' + fetchedUser[0].lastname
                }
                return res.status(200).send('Correct')
            }
            else res.status(400).send({errors: ['Invalid email or password']})
        }
    })
    .catch((error) => {
        res.status(400).send({errors: [error.message]})
    })
    
}