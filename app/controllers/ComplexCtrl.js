const Complex = require('../models/Complex');
const Apertment = require('../models/Apertment');
const ObjectId = require('mongodb').ObjectID;

exports.createComplex = createComplex;
exports.getComplex = getComplex;
exports.getComplexById = getComplexById;
// exports.getObjectsPaginationSales = getObjectsPaginationSales;
// exports.getObjectsPaginationRent = getObjectsPaginationRent;
// exports.getObjectById = getObjectById;
// exports.getInfoSales = getInfoSales;
// exports.getInfoRent = getInfoRent;
// exports.getFilter = getFilter;
// exports.getObjects = getObjects;
exports.deleteComplex = deleteComplex;
exports.updateComplex = updateComplex;

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
async function deleteComplex(req, res) {
    console.log(req.params.id)
    let removed = await Complex.remove({
        _id: ObjectId(req.params.id)
    })
    console.log(removed);
    res.json(removed).end();
}
// createArticle();
// async function createArticle() {
//     let article = 1111;
//     const objects = await Apertment.find({});
//     for (let i = 0; i < objects.length; i++) {
//         await Apertment.update({_id: objects[i]._id},{$set:{code:article}});
//         article++;
//     }
// }
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
            await Complex.create({
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

async function createComplex(req, res) {
    let photo = [];
    let imageName='';
    let extention='';
    if(req.body.image){
        imageName = makeid();
        extention = req.body.image.substring("data:image/".length, req.body.image.indexOf(";base64"))
        ba64.writeImage('upload/photo/' + imageName, req.body.image, function (err) {
            if (err) throw err;
    
            console.log("Image saved successfully");
    
        });
    }else{
        imageName = 'default';
        extention = 'jpg';
    }
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
        let create = await Complex.create({
            titleRu: req.body.nameOfObjectRU,
            titleEn: req.body.nameOfObjectEN,
            distanceToBitch: req.body.distanceToBitch,
            distanсeToAiroport: req.body.distanсeToAiroport,
            descriptionEn: req.body.descriptionEN,
            descriptionRu: req.body.descriptionRU,
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
                owner: req.body.adminInfo.owner,
                ownerContacts: req.body.adminInfo.ownerContacts,
                address: req.body.adminInfo.address,
                comments: req.body.adminInfo.comments
            },
            code: req.body.code,
            video: req.body.video,
            active: req.body.active,
            objects: req.body.objectsId
        });
        if (req.body.objectsId.length) {
            for (let i = 0; i < req.body.objectsId.length; i++) {
                Apertment.update({_id:ObjectId(req.body.objectsId[i])}, {$set:{
                    complexId: create._id
                }})
            }
        }
        res.json(create).end();
    } catch (error) {
        console.log(error)
    }
}

async function updateComplex(req, res) {
    let photo = [];
    let imageName='';
    if(req.body.image.includes('photo/') || req.body.image.includes('iblock/')){
        imageName = req.body.image
    }else{
         imageName = 'photo/'+makeid();
         extention = req.body.image.substring("data:image/".length, req.body.image.indexOf(";base64"))
        ba64.writeImage('upload/photo/' + imageName, req.body.image, function (err) {
            if (err) throw err;
    
            console.log("Image saved successfully");
            imageName+'.'+extention;
        });
    }
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
        let create = await Complex.update({ _id: ObjectId(req.body._id) }, {
            $set: {
                titleRu: req.body.titleRu,
                titleEn: req.body.titleRu,
                distanceToBitch: req.body.distanceToBitch,
                distanceToAiroport: req.body.distanceToAiroport,
                descriptionEn: req.body.descriptionEn,
                descriptionRu: req.body.descriptionRu,
                mainPhoto: imageName,
                coordinat: {
                    x: req.body.coordinat.x,
                    y: req.body.coordinat.y
                },
                address: req.body.address,
                location: req.body.location,
                active: req.body.active,
                typeOfObject: req.body.type,
                adminInfo: {
                    owner: req.body.owner,
                    ownerContacts: req.body.ownerContacts,
                    address: req.body.address,
                    comments: req.body.comments
                },
                video: req.body.video,
                code: req.body.code
            }
        })
        res.json(create).end();
    } catch (error) {
        console.log(error)
    }
}

async function getComplex(req, res) {
    try {
        let complex = await Complex.find({});
        res.json(complex).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjects(req, res) {
    try {
        let objects = await Apertment.find({ })
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

async function getComplexById(req, res) {
    try {
        let complex = await Complex.findOne({ _id: ObjectId(req.params.id) });
        let objects = [];
        for (let i = 0; i < complex.objectsId.length; i++) {
            let find = await Apertment.find({_id:ObjectId(complex.objectsId[i])});
            objects.push(find);
        }
        Object.assign(complex, objects)
        res.json(complex).end();
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