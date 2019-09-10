const User = require('../models/users.model')

exports.createUser = (userData) => {
    const newUser = new User(userData)
    return newUser.save()
}

exports.findById = (id) => {
    return User.findById(id)
        .then((result) => {
            console.log(result)
            result = result.toJSON()
            return result
        })
}

exports.findByEmail = (email) => {
    return User.find({email : email});
}

exports.patchUser = (id,userData) => {
    return new Promise((resolve, reject) => {
        User.findById(id, (err, user) => {
            if(err){
                reject(err)
            }
            for (let i in userData){
                user[i] = userData[i]
            }
            user.save((err,updateUser) => {
                if(err) reject(err)
                resolve(updateUser)
            })


        })

    })
}

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage*page)
            .exec((err, users) => {
                if(err) reject(err)
                else resolve(users)
            })
    })
}

exports.deleteById = (userId) => {
    return new Promise((resolve, reject) => {
        User.remove({_id : userId}, (err) => {
            if(err) reject(err)
            else resolve(err)
        })
    })
}