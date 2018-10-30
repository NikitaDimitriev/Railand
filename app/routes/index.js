const AuthCtrl = require('../controllers/AuthCtrl');
module.exports = function(app){
    //auth api
    app.post('/api/sign-up-user', AuthCtrl.signUp);
    app.post('/api/log-in-user', AuthCtrl.logIn);
}