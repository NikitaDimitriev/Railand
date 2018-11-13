const User = require('../models/User');
const ObjectId = require('mongodb').ObjectID;

exports.signUp = signUp;
exports.logIn = logIn;
exports.getUserId = getUserId;

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
                password: req.body.password
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

async function getUserId(req, res){
    try {
        let currentUser = await User.findOne({ _id: ObjectId(req.params.id)});
        console.log(currentUser);
        res.json(currentUser).end();
    } catch (error) {
        console.log(error);
    }
}