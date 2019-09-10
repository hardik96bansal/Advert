const VerifyUserMiddleware = require('../authorisation/verify.user.middleware');

exports.routerConfig = (app) => {
    app.post('/auth', [
        VerifyUserMiddleware.validateUserPassword
    ]);
}