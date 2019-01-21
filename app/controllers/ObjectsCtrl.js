const Apertment = require('../models/Object');
const ObjectId = require('mongodb').ObjectID;

exports.createObject = createObject;
exports.getObjectsSales = getObjectsSales;
exports.getObjectsRent = getObjectsRent;
exports.getObjectsPaginationSales = getObjectsPaginationSales;
exports.getObjectsPaginationRent = getObjectsPaginationRent;
exports.getObjectById = getObjectById;
exports.getInfoSales = getInfoSales;
exports.getInfoRent = getInfoRent;
exports.getFilter = getFilter;
exports.getObjects = getObjects;
exports.deleteObject = deleteObject;
exports.updateObject = updateObject;

const fs = require("fs");
const request = require('request');
const ba64 = require('ba64');
const file = require('./dump.json');
const filePhoto = require('./dumpPhoto.json');
// let json = fs.readFileSync(file);
let newDataJson = JSON.parse(JSON.stringify(file));
let newDataJsonPhoto = JSON.parse(JSON.stringify(filePhoto));
console.log(newDataJson.property[0]['Main photo']);
console.log(newDataJsonPhoto.property[0]['Main photo']);
let dump = newDataJson.property;
let dumpPhoto = newDataJsonPhoto.property;
// create(dump, dumpPhoto);
async function deleteObject(req, res) {
    console.log(req.params.id)
    let removed = await Apertment.remove({
        _id: ObjectId(req.params.id)
    })
    console.log(removed);
    res.json(removed).end();
}
async function create(dump, dumpPhoto) {
    try {
        for (let i = 0; i < dump.length; i++) {
            const data = dump[i];
            const dataPhoto = dumpPhoto[i];
            let priceSales = '';
            let currencySales = '';
            let priceRent = '';
            let currencyRent = '';
            let photo = [];
            let sales = false;
            let rent = false;
            let mapPosition = {
                x: 0,
                y: 0
            }
            if (data["Map position"]) {
                mapPosition.x = parseFloat(data["Map position"].substring(0, data["Map position"].indexOf(",")));
                mapPosition.y = parseFloat(data["Map position"].substring(data["Map position"].indexOf(",") + 2));
                console.log(mapPosition);
            }
            if (data["PRICES"]) {
                for (let j = 0; j < data["PRICES"].length; j++) {
                    if (data["PRICES"][j].rental_type === 'sales' && data["PRICES"][j].price > 0) {
                        priceSales = data["PRICES"][j].price.substring(0, data["PRICES"][j].price.indexOf("."));
                        currencySales = data["PRICES"][j].currency;
                        sales = true
                    } else if (data["PRICES"][j].rental_type === 'rent' && data["PRICES"][j].price > 0) {
                        priceRent = data["PRICES"][j].price.substring(0, data["PRICES"][j].price.indexOf("."));
                        currencyRent = data["PRICES"][j].currency;
                        rent = true
                    }
                }
            };
            if (dataPhoto.Photo.VALUE) {
                for (let j = 0; j < dataPhoto.Photo.VALUE.length; j++) {
                    if (dataPhoto.Photo.VALUE[j].includes("iblock")) {
                        photo.push(dataPhoto.Photo.VALUE[j])
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
                distanceToBitch: toBitch.substring(0, toBitch.indexOf(".") + 2),
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
                location: data["Location"],
                typeOfObject: data["Property type"],
                address: data["Address"],
                mainPhoto: data["Main photo"],
                sales: sales,
                rent: rent,
                photo: photo,
                price: {
                    priceSales: formatPrice(priceSales),
                    currencySales: currencySales,
                    priceRent: formatPrice(priceRent),
                    currencyRent: currencyRent
                },
                coordinat: mapPosition,
                stage: data["Stage"],
                infrastructure: data.Infrastructure.VALUE,
                features: data["Property features"].VALUE
            });
            console.log("create");
        }
    } catch (error) {
        console.log(error)
    }
}
// getMainPhoto()
async function getPhotoArray(data) {
    if (data["Photo"]) {
        return data["Photo"]["VALUE"];
    }
}
// addApartment();

function formatPrice(value) {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").slice(0, -1).slice(0, -2)
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
        let info = await Apertment.find({ sales: true }).countDocuments();
        console.log(info);
        res.json(info).end();
    } catch (error) {
        console.log(error)
    }
}

async function getInfoRent(req, res) {
    try {
        let info = await Apertment.find({ rent: true }).countDocuments();
        console.log(info);
        res.json(info).end();
    } catch (error) {
        console.log(error)
    }
}

async function createObject(req, res) {
    let photo = [];
    let rent = '';
    let sales = '';
    if (req.body.typeOfObject === 'all') {
        rent = 'true';
        sales = 'true';
    } else if (req.body.typeOfObject === 'rent') {
        rent = 'true';
        sales = 'false';
    } else if (req.body.typeOfObject === 'sales') {
        rent = 'false';
        sales = 'true';
    }
    let imageName = makeid();
    let extention = req.body.image.substring("data:image/".length, req.body.image.indexOf(";base64"))
    ba64.writeImage('upload/photo/' + imageName, req.body.image, function (err) {
        if (err) throw err;

        console.log("Image saved successfully");

    });
    if (req.body.photo) {
        for (let i = 0; i < req.body.photo.length; i++) {
            let photoName = makeid();
            let extention = req.body.photo[i].substring("data:image/".length, req.body.photo[i].indexOf(";base64"))
            ba64.writeImage('upload/photo/' + photoName, req.body.photo[i], function (err) {
                if (err) throw err;
            });
            photo.push('photo/' + photoName + '.' + extention)
        }
    }
    try {
        let create = await Apertment.create({
            titleRu: req.body.titleRu,
            titleEn: req.body.titleEu,
            area: req.body.area,
            distanceToBitch: req.body.distanceToBitch,
            rooms: req.body.rooms,
            distanceToAiroport: req.body.distanceToAiroport,
            badroom: req.body.badroom,
            bathroom: req.body.bathroom,
            landArea: req.body.landArea,
            lifeArea: req.body.lifeArea,
            areaOfPool: req.body.areaOfPool,
            floor: req.body.floor,
            descriptionEn: req.body.descriptionEn,
            descriptionRu: req.body.descriptionRu,
            sales,
            rent,
            stage: req.body.stage,
            price: {
                priceSales: req.body.price
            },
            coordinat: {
                x: req.body.coordinat.x,
                y: req.body.coordinat.y
            },
            address: req.body.address,
            location: req.body.location,
            mainPhoto: 'photo/' + imageName + '.' + extention,
            photo: photo,
            typeOfObject: req.body.type,
            adminInfo: {
                owner: req.body.owner,
                ownerContacts: req.body.ownerContacts,
                address: req.body.address,
                comments: req.body.comments
            }
        })
        res.json(create).end();
    } catch (error) {
        console.log(error)
    }
}

async function updateObject(req, res) {
    let photo = [];
    let rent = '';
    let sales = '';
    let price = '';
    if (req.body.typeOfObject === 'all') {
        rent = 'true';
        sales = 'true';
    } else if (req.body.typeOfObject === 'rent') {
        rent = 'true';
        sales = 'false';
    } else if (req.body.typeOfObject === 'sales') {
        rent = 'false';
        sales = 'true';
    }
    if (!req.body.price) {
        price = ""
    } else {
        price = req.body.price.priceSales;
    }
    // let imageName = makeid();
    // let extention = req.body.image.substring("data:image/".length, req.body.image.indexOf(";base64"))
    // ba64.writeImage('upload/photo/' + imageName, req.body.image, function (err) {
    //     if (err) throw err;

    //     console.log("Image saved successfully");

    // });
    // if (req.body.photo) {
    //     for (let i = 0; i < req.body.photo.length; i++) {
    //         let photoName = makeid();
    //         let extention = req.body.photo[i].substring("data:image/".length, req.body.photo[i].indexOf(";base64"))
    //         ba64.writeImage('upload/photo/' + photoName, req.body.photo[i], function (err) {
    //             if (err) throw err;
    //         });
    //         photo.push('photo/' + photoName + '.' + extention)
    //     }
    // }
    try {
        console.log(req.body._id);
        let create = await Apertment.update({ _id: ObjectId(req.body._id) }, {
            $set: {
                titleRu: req.body.titleRu,
                titleEn: req.body.titleRu,
                area: req.body.area,
                distanceToBitch: req.body.distanceToBitch,
                rooms: req.body.rooms,
                distanceToAiroport: req.body.distanceToAiroport,
                badroom: req.body.badroom,
                bathroom: req.body.bathroom,
                landArea: req.body.landArea,
                lifeArea: req.body.lifeArea,
                areaOfPool: req.body.areaOfPool,
                floor: req.body.floor,
                descriptionEn: req.body.descriptionEn,
                descriptionRu: req.body.descriptionRu,
                sales,
                rent,
                stage: req.body.stage,
                price: {
                    priceSales: price
                },
                coordinat: {
                    x: req.body.coordinat.x,
                    y: req.body.coordinat.y
                },
                address: req.body.address,
                location: req.body.location,
                topOfList: req.body.topOfList,
                active: req.body.active,
                typeOfObject: req.body.type,
                adminInfo: {
                    owner: req.body.owner,
                    ownerContacts: req.body.ownerContacts,
                    address: req.body.address,
                    comments: req.body.comments
                },
                video: req.body.video
            }
        })
        res.json(create).end();
    } catch (error) {
        console.log(error)
    }
}

async function getObjectsSales(req, res) {
    try {
        let objects = await Apertment.find({ sales: "true", topOfList: true });
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjects(req, res) {
    try {
        let objects = await Apertment.find({ active: true })
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjectsRent(req, res) {
    try {
        let objects = await Apertment.find({ rent: "true", topOfList: true });
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
        let objects = await Apertment.find({ sales: "true", active: true }).limit(paginationData.perPage).skip(paginationData.perPage * paginationData.page);
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
        let objects = await Apertment.find({ rent: "true", active: true });
        console.log(objects);
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

async function getFilter(req, res) {
    try {
        let types = req.body.filter.type;
        let searchSales = true;
        let searchRent = false;
        if (types === 'sales') {
            searchSales = true
        } else {
            searchRent = true
        }
        let objects = await Apertment.find({ sales: searchSales, rent: searchRent });
        let result = [];
        let resultTemp = {};
        for (let i = 0; i < objects.length; i++) {
            resultTemp = objects[i];
            if (req.body.filter.location !== 'all') {
                objects[i].location === req.body.filter.location ? null : resultTemp = false;
            };
            if (req.body.filter.rooms !== 'all') {
                if (req.body.filter.rooms === '4+') {
                    parseInt(resultTemp.rooms) > 3 ? null : resultTemp = false;
                } else {
                    objects[i].rooms === req.body.filter.rooms ? null : resultTemp = false;
                }
            }
            if (req.body.filter.statusOfObject !== 'all') {
                objects[i].stage === req.body.filter.statusOfObject ? null : resultTemp = false
            }
            if (req.body.filter.priceBegin) {
                console.log(req.body.filter.priceBegin, objects[i].price.priceSales.replace(/\./g, ''))
                parseInt(objects[i].price.priceSales.replace(/\./g, '')) > parseInt(req.body.filter.priceBegin) ? null : resultTemp = false;
            }
            if (req.body.filter.priceEnd) {
                parseInt(objects[i].price.priceSales.replace(/\./g, '')) < parseInt(req.body.filter.priceEnd) ? null : resultTemp = false;
            }
            let check = await checkType(req.body.filter.typeOfObject, objects[i].typeOfObject);
            if (!check) resultTemp = false;

            if (resultTemp) {
                result.push(resultTemp);
            }
        }
        res.json(result).end();
    } catch (error) {
        console.log(error);
    }
}

async function checkType(types, object) {
    let check = true;
    if (types.villa) {
        console.log("here")
        object === "villa" ? null : check = false;
    } else if (types.apartment) {
        object === "apartment" ? null : check = false;
    }
    else if (types.house) {
        object === "house" ? null : check = false;
    }
    else if (types.land) {
        object === "land" ? null : check = false;
    }
    console.log(check)
    return check;
}