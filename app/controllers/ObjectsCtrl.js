const Apertment = require('../models/Object');
const ObjectId = require('mongodb').ObjectID;

exports.createObject = createObject;
exports.getObjects = getObjects;
exports.getObjectsPaginationSales = getObjectsPaginationSales;
exports.getObjectsPaginationRent = getObjectsPaginationRent;
exports.getObjectById = getObjectById;
exports.getInfoSales = getInfoSales;
exports.getInfoRent = getInfoRent;

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
                let priceSales = '';
                let currencySales = '';
                let priceRent = '';
                let currencyRent = '';
                let property = [];
                let sales = false;
                let rent = false;
            if(data["PRICES"]){
                for (let j = 0; j < data["PRICES"].length; j++) {
                    if(data["PRICES"][j].rental_type === 'sales' && data["PRICES"][j].price > 0){
                        priceSales = data["PRICES"][j].price;
                        currencySales = data["PRICES"][j].currency;
                        sales = true
                    }else if(data["PRICES"][j].rental_type === 'rent' && data["PRICES"][j].price > 0){
                        priceRent = data["PRICES"][j].price;
                        currencyRent = data["PRICES"][j].currency;
                        rent = true
                    }
                }
            }
            let area = data["Built-up area"] || '';
            let indoor = data["Indoor area"] || '';
            let toBitch = data["Distance to the beach"] || '';
            let toAiroport = data["Distance to the airport"] || '';
            await Apertment.create({
                titleRu: data["Title Ru"],
                titleEn: data["Title En"],
                area: area.substring(0, area.indexOf(".")),
                distanceToBitch: toBitch.substring(0, toBitch.indexOf(".")+2),
                rooms: data["Number of bedrooms"].substring(0, data["Number of bedrooms"].indexOf(".")),
                distanceToAiroport: toAiroport.substring(0, toAiroport.indexOf(".")),
                badroom: data["Number of bedrooms"].substring(0, data["Number of bedrooms"].indexOf(".")),
                bathroom: data["Number of bathrooms"].substring(0, data["Number of bathrooms"].indexOf(".")),
                landArea: area.substring(0, area.indexOf(".")),
                lifeArea: indoor.substring(0, indoor.indexOf(".")),
                areaOfPool: data["Swimming pool size"],
                floor: data["Number of storeys"].substring(0, data["Number of storeys"].indexOf(".")),
                descriptionRu: data["Description Ru"],
                descriptionEn: data["Description En"],
                locationId: data["Location"],
                typeOfObject: data["Property type"],
                address: data["Address"],
                mainPhoto: data["Main photo"],
                sales: sales,
                rent: rent,
                // photo:photo,
                price:{
                    priceSales: priceSales,
                    currencySales: currencySales,
                    priceRent: priceRent,
                    currencyRent: currencyRent
                }
            });
            console.log("create");
        }
    } catch (error) {
        console.log(error)
    }
}
// getMainPhoto()
async function getPhotoArray(data){
    if(data["Photo"]){
        return data["Photo"]["VALUE"];
    }
}
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

async function getInfoSales(req, res) {
    try {
        let info = await Apertment.find({sales: true}).countDocuments();
        console.log(info);
        res.json(info).end();
    } catch (error) {
        console.log(error)
    }
}

async function getInfoRent(req, res) {
    try {
        let info = await Apertment.find({rent: true}).countDocuments();
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

async function getObjectsPaginationSales(req, res) {
    try {
        let paginationData = {
            page: parseInt(req.params.page),
            perPage: parseInt(req.params.perPage)
        }
        console.log(paginationData);
        let objects = await Apertment.find({sales: true}).limit(paginationData.perPage).skip(paginationData.perPage * paginationData.page);
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjectsPaginationRent(req, res) {
    try {
        let paginationData = {
            page: parseInt(req.params.page),
            perPage: parseInt(req.params.perPage)
        }
        console.log(paginationData);
        let objects = await Apertment.find({rent: true}).limit(paginationData.perPage).skip(paginationData.perPage * paginationData.page);
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