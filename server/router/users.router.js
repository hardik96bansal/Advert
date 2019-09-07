const UserController = require('../controllers/users.controller')

exports.routerConfig = (app) => {
    app.post('/users',[
        UserController.insert
    ])
}