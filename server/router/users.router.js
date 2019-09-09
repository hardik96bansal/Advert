const UserController = require('../controllers/users.controller')

exports.routerConfig = (app) => {
    app.post('/users',[
        UserController.insert
    ])

    app.get('/users/:userId', [
        UserController.getById
    ]) 

    app.patch('/users/:userId',[
        UserController.patchById
    ])

    app.get('/users/',[
        UserController.list
    ])

    app.delete('/users/:userId', [
        UserController.deleteById
    ])
}