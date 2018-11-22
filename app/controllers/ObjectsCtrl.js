const Apertment = require('../models/Object');
const ObjectId = require('mongodb').ObjectID;

exports.createObject = createObject;
exports.getObjects = getObjects;
exports.getObjectsPagination = getObjectsPagination;
exports.getObjectById = getObjectById;
exports.getInfo = getInfo;

const fs = require("fs");
const request = require('request');
const file = require('./dump.json');
// let json = fs.readFileSync(file);
let newDataJson = JSON.parse(JSON.stringify(file));
console.log(newDataJson.property[0]['Main photo']);
let dump = newDataJson.property;
create(dump);
async function create(dump) {
    try {
        for (let i = 0; i < dump.length; i++) {
            const data = dump[i];
            // let imageUrl = getImage(data["Main photo"]);
            // console.log(imageUrl);
            await Apertment.create({
                titleRu: data["Title Ru"],
                titleEn: data["Title En"],
                price: 60000 * Math.floor(Math.random() * 10) + 1,
                area: data["Built-up area"],
                distanceToBitch: data["Distance to the beach"],
                rooms: data["Number of bedrooms"],
                distanceToAiroport: data["Distance to the airport"],
                badroom: data["Number of bedrooms"],
                bathroom: data["Number of bathrooms"],
                landArea: data["Built-up area"],
                lifeArea: data["Indoor area"],
                areaOfPool: data["Swimming pool size"],
                floor: data["Number of storeys"],
                descriptionRu: data["Description Ru"],
                descriptionEn: data["Description En"],
                locationId: data["Location"],
                typeOfObject: data["Property type"],
                address: data["Address"],
                mainPhoto: data["Main photo"]
            });
            console.log("create");
        }
    } catch (error) {
        console.log(error)
    }
}
// getMainPhoto()
async function getMainPhoto() {
    try {
        for (let i = 0; i < dump.length; i++) {
            let image = dump[i]["Main photo"];
            getImage(image);
        }
    } catch (error) {

    }
}

function getImage(image) {
        let url = makeid();
        request.get("http://rl-property.ru/upload/" + image).pipe(fs.createWriteStream('./app/upload/' + url + '.jpg'));
        return './app/upload/' + url + '.jpg';
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

async function getInfo(req, res) {
    try {
        let info = await Apertment.find({}).count();
        console.log(info);
        res.json(info).end();
    } catch (error) {
        console.log(error)
    }
}

async function createObject(req, res) {
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

async function getObjects(req, res) {
    try {
        let objects = await Apertment.find({}).limit(5).skip(50);
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjectsPagination(req, res) {
    try {
        let paginationData = {
            page: parseInt(req.params.page),
            perPage: parseInt(req.params.perPage)
        }
        console.log(paginationData);
        let objects = await Apertment.find({}).limit(paginationData.perPage).skip(paginationData.perPage * paginationData.page);
        // console.log(objects);
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjectById(req, res) {
    try {
        let object = await Apertment.findOne({ _id: ObjectId(req.params.id) });
        res.json(object).end();
    } catch (error) {
        console.log(error);
    }
}