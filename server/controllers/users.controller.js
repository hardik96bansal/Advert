const crypto = require('crypto')
const UserDbOpers = require('../dbOpers/users.dbOpers')

exports.insert = (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64');
    req.body.password = salt + '$' + hash;

    UserDbOpers.createUser(req.body)
        .then((result) => {
            res.status(201).send({ res: result._id });
        })
        .catch((err) => {
            console.log('aaa',err)
            res.status(409).send({res : err.message})
        });
}

exports.getById = (req, res) => {
    UserDbOpers.findById(req.params.userId)
        .then((result) => {
            res.status(200).send(result)
        })
}

exports.patchById = (req, res) => {
    if (req.body.password) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64');
        req.body.password = salt + '$' + hash;
    }
    UserDbOpers.patchUser(req.params.userId, req.body)
        .then((result) => {
            res.status(204).send({})
        })
}

exports.list = (req,res) => {
    let limit = req.query.limit && req.query.limit<100 ? parseInt(req.query.limit) : 10
    let page = 0;

    if(req.query){
        if(req.query.page){
            req.query.page = parseInt(req.query.page)
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }

    UserDbOpers.list(limit, page)
        .then((result) => {
            res.status(200).send(result)
        })
}

exports.deleteById = (req,res) => {
    UserDbOpers.deleteById(req.params.userId)
        .then((result) => {
            res.status(204).send({});
        })
}