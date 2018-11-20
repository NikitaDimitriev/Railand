const Apertment = require('../models/Object');
const ObjectId = require('mongodb').ObjectID;
const fs = require('fs').readFileSync;
const file = require('./text.txt');
let newDataJson = JSON.parse(fs.readFileSync(file, 'utf-8'));
console.log(newDataJson);

exports.createObject = createObject;
exports.getObjects = getObjects;
exports.getObjectsPagination = getObjectsPagination;
exports.getObjectById= getObjectById;
exports.test = test;

function test (req, res){
    console.log("apartment here");
    res.json("create").end();
}

async function createObject(req, res){
    console.log(req.body);
    try {
       let create = await Apertment.create({
            title: req.body.title,
            price: req.body.price,
            area: req.body.area,
            distanceToBitch: req.body.distanceToBitch,
            rooms: req.body.rooms,
            distanceToAiroport: req.body.distanceToAiroport,
            badroom: req.body.badroom,
            bathroom: req.body.bathroom,
            landArea: req.body.landArea,
            lifeArea: req.body.lifeArea,
            areaOfPool: req.body.areaOfPool,
            floor: req.body.floor
        })
        res.json(create).end();
    } catch (error) {
        console.log(error)
    }
}

async function getObjects(req, res){
    try {
        let objects = await Apertment.find({}).limit(5);
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjectsPagination(req, res){
    try {
        let objects = await Apertment.find({}).limit(req.body.perPage).skip(req.body.perPage * req.body.page);
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjectById(req, res) {
    try {
        let object = await Apertment.findOne({_id : ObjectId(req.params.id)});
        res.json(object).end();
    } catch (error) {
        console.log(error);
    }
}