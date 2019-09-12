const UserDbOper = require('../dbOpers/users.dbOpers')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const config = require('../common/config/env.config')

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
                next()
            }
            else res.status(400).send({errors: ['Invalid email or password']})
        }
    })
    .catch((error) => {
        res.status(400).send({errors: [error.message]})
    })
    
}

exports.login = (req,res) => {
    let token = jwt.sign(req.body,config.jwtSecret)
    res.status(200).send({token})
}

exports.validateJWT = (req,res) => {
    let b = req.headers['authorization'].split('Bearer ')
    console.log('ccc',b[0],b[1])
    let a = jwt.verify(b[1],config.jwtSecret)
    console.log('b',a)
    res.status(200).send({res:a})
}