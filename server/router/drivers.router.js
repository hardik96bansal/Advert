const UserController = require('../controllers/users.controller')
const DriverController = require('../controllers/drivers.controller')

exports.routerConfig = (app) => {
    app.post('/driver', [
        UserController.insert,
        DriverController.createDriver
    ])
}