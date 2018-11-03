const User = require('../models/User');

exports.signUp = signUp;
exports.logIn = logIn;

async function signUp(req, res) {
    console.log(req.body);
    try {
        let email = req.body.email;
        let currentUser = await User.findOne({ email: email })
        if (currentUser) {
            console.log('User find');
            res
                .status(409)
                .json(currentUser)
                .end();
        } else {
            let register = await User.create({
                login: req.body.login,
                email: email,
                password: req.body.password,
                username: req.body.firstName + ' ' + req.body.lastName,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            })
            console.log(register);
            res
                .status(200)
                .json(register)
                .end();
        }
    } catch (error) {
        console.log(error);
    }
}

async function logIn(req, res) {
    try {
        let email = req.body.email;
        let currentUser = await User.findOne({ email: email, password: req.body.password });
        if(currentUser){
            res
                .status(200)
                .json(currentUser)
                .end();
        }else{
            res
                .status(409)
                .json(false)
                .end()
        }
    } catch (error) {
        console.log(error)
    }
}