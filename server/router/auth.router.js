const AuthController = require('../authorization/auth.controller');

exports.routerConfig = (app) => {
    app.post('/auth', [
        AuthController.validateUserPassword,
        AuthController.login
    ]);
    app.get('/abc',AuthController.validateJWT)
}