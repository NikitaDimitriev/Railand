const Apertment = require('../models/Object');

exports.createObject = createObject;

async function createObject(req, res){
    try {
       let create = await Apertment.create({
            title: req.body.name,
            price: req.body.price,
            square: req.body.square,
            distanceToBitch: req.body.distanceToBitch,
            rooms: req.body.rooms
        })
        res.json(create).end();
    } catch (error) {
        console.log(error)
    }
}

async function getObjects(req, res){
    try {
        
    } catch (error) {
        
    }
}