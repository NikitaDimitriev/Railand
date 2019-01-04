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

const fs = require("fs");
const request = require('request');
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
                    y:0
                }
            if(data["Map position"]){
                mapPosition.x = parseFloat(data["Map position"].substring(0, data["Map position"].indexOf(",")));
                mapPosition.y = parseFloat(data["Map position"].substring(data["Map position"].indexOf(",")+2));
                console.log(mapPosition);
            }
            if(data["PRICES"]){
                for (let j = 0; j < data["PRICES"].length; j++) {
                    if(data["PRICES"][j].rental_type === 'sales' && data["PRICES"][j].price > 0){
                        priceSales = data["PRICES"][j].price.substring(0, data["PRICES"][j].price.indexOf("."));
                        currencySales = data["PRICES"][j].currency;
                        sales = true
                    }else if(data["PRICES"][j].rental_type === 'rent' && data["PRICES"][j].price > 0){
                        priceRent = data["PRICES"][j].price.substring(0, data["PRICES"][j].price.indexOf("."));
                        currencyRent = data["PRICES"][j].currency;
                        rent = true
                    }
                }
            };
            if(dataPhoto.Photo.VALUE){
                for (let j = 0; j < dataPhoto.Photo.VALUE.length; j++) {
                    if(dataPhoto.Photo.VALUE[j].includes("iblock")){
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
                location: data["Location"],
                typeOfObject: data["Property type"],
                address: data["Address"],
                mainPhoto: data["Main photo"],
                sales: sales,
                rent: rent,
                photo:photo,
                price:{
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
async function getPhotoArray(data){
    if(data["Photo"]){
        return data["Photo"]["VALUE"];
    }
}
// addApartment();
async function addApartment() {
    await Apertment.create({
        titleRu: 'Laguna Cove Pool Villa',
        titleEn: 'Laguna Cove Pool Villa',
        area: '430',
        distanceToBitch: '',
        rooms: '4',
        distanceToAiroport: '',
        badroom: '4',
        bathroom: '3',
        landArea: '465',
        lifeArea: '430',
        areaOfPool: '',
        floor: '',
        descriptionRu: 'Cosy  two-storeyed  private  pool  villa  in  Laguna  Cove  is  located  in  a  walking  distance  from  BangTao  Beach.  Laguna  Property  provides  its  guests  with  free  shuttle  bus  service  (every  20  minutes),which  takes  you  to  Bang  Tao  beach,  canal  shops,  restaurants,  gym,  golf  club,  beach  club,  hotelprivate  beaches  and  other  facilities.  The  Villa is  nestled  near  the  lake  and  offers  beautiful  viewfrom  the  most  of  the  rooms.  Villa  has  4  bedrooms  and  3  bathrooms,  one  of  them  with  bathtube.The  property  is  fully  furnished  and  equipped  with  all  necessary  kitchen  utilities.  There  is  aspacious  properly  furnished  sunbathing  terrace  by  the  pool,  patio  and  covered  sala.',
        descriptionEn: 'Cosy  two-storeyed  private  pool  villa  in  Laguna  Cove  is  located  in  a  walking  distance  from  BangTao  Beach.  Laguna  Property  provides  its  guests  with  free  shuttle  bus  service  (every  20  minutes),which  takes  you  to  Bang  Tao  beach,  canal  shops,  restaurants,  gym,  golf  club,  beach  club,  hotelprivate  beaches  and  other  facilities.  The  Villa is  nestled  near  the  lake  and  offers  beautiful  viewfrom  the  most  of  the  rooms.  Villa  has  4  bedrooms  and  3  bathrooms,  one  of  them  with  bathtube.The  property  is  fully  furnished  and  equipped  with  all  necessary  kitchen  utilities.  There  is  aspacious  properly  furnished  sunbathing  terrace  by  the  pool,  patio  and  covered  sala.',
        location: 'bang-tao',
        typeOfObject: 'villa',
        address: 'Laguna Cove',
        mainPhoto: 'photo/1.jpg',
        sales: "false",
        rent: "true",
        photo:['photo/1.jpg', 'photo/8.jpg','photo/16.jpg', 'photo/23.jpg', 'photo/25.jpg'],
        // price:{
        //     priceSales: formatPrice(priceSales),
        //     currencySales: currencySales,
        //     priceRent: formatPrice(priceRent),
        //     currencyRent: currencyRent
        // },
        coordinat: {
            x: 7.784912,
            y:98.311196
        },
        stage: '1',
        infrastructure: '',
        features: ''
    });
    await Apertment.create({
        titleRu: 'Laguna Vista Pool Villa',
        titleEn: 'Laguna Vista Pool Villa',
        area: '450',
        distanceToBitch: '',
        rooms: '4',
        distanceToAiroport: '',
        badroom: '4',
        bathroom: '3',
        landArea: '576',
        lifeArea: '450',
        areaOfPool: '',
        floor: '',
        descriptionRu: 'Comfortable two-storeyed  private  pool  villa  in  Laguna  Vista  is  located  in  a  walking  distance  fromBang  Tao  Beach.  Laguna  Property  provides  its  guests  with  free  shuttle  bus  service  (every  20minutes),  which  takes  you  to  Bang  Tao  beach,  canal  shops,  restaurants,  gym,  golf  club,  beachclub,  hotel  private  beaches  and  other  facilities.  The  Villa is  nestled  near  the  lake  and  offersbeautiful  view  from  the  most  of  the  rooms.  Villa  has  4  bedrooms  and  4  bathrooms,  one  of  themwith  bathtube.  The  property  is  fully  furnished  and  equipped  with  all  necessary  kitchen  utilities.There  is  a  spacious  properly  furnished  sunbathing  terrace  by  the  pool,  patio  and  covered  sala.',
        descriptionEn: 'Comfortable two-storeyed  private  pool  villa  in  Laguna  Vista  is  located  in  a  walking  distance  fromBang  Tao  Beach.  Laguna  Property  provides  its  guests  with  free  shuttle  bus  service  (every  20minutes),  which  takes  you  to  Bang  Tao  beach,  canal  shops,  restaurants,  gym,  golf  club,  beachclub,  hotel  private  beaches  and  other  facilities.  The  Villa is  nestled  near  the  lake  and  offersbeautiful  view  from  the  most  of  the  rooms.  Villa  has  4  bedrooms  and  4  bathrooms,  one  of  themwith  bathtube.  The  property  is  fully  furnished  and  equipped  with  all  necessary  kitchen  utilities.There  is  a  spacious  properly  furnished  sunbathing  terrace  by  the  pool,  patio  and  covered  sala.',
        location: 'bang-tao',
        typeOfObject: 'villa',
        address: 'Laguna Cove',
        mainPhoto: 'photo/1(1).jpg',
        sales: "false",
        rent: "true",
        photo:['photo/1(1).jpg', 'photo/2.jpg','photo/6.jpg', 'photo/9.jpg', 'photo/11.jpg'],
        // price:{
        //     priceSales: formatPrice(priceSales),
        //     currencySales: currencySales,
        //     priceRent: formatPrice(priceRent),
        //     currencyRent: currencyRent
        // },
        coordinat: {
            x: 7.784912,
            y:98.311196
        },
        stage: '1',
        infrastructure: '',
        features: ''
    });
    console.log('created')
}

function formatPrice(value) {
    let val = (value/1).toFixed(2).replace('.', ',')
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

async function getObjectsSales(req, res) {
    try {
        let objects = await Apertment.find({sales:true}).limit(5).skip(50);
        res.json(objects).end();
    } catch (error) {
        console.log(error);
    }
}

async function getObjectsRent(req, res) {
    try {
        let objects = await Apertment.find({rent:true}).limit(5).skip(10);
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
        let objects = await Apertment.find({sales: "true"}).limit(paginationData.perPage).skip(paginationData.perPage * paginationData.page);
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
        let objects = await Apertment.find({rent: "true"});
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
        if(types === 'sales'){
            searchSales = true
        }else{
            searchRent = true
        }
        let objects = await Apertment.find({sales: searchSales, rent: searchRent});
        let result = [];
        let resultTemp = {};
        for (let i = 0; i < objects.length; i++) {
            resultTemp = objects[i];
            if(req.body.filter.location !== 'all'){
                objects[i].location === req.body.filter.location ? null : resultTemp = false;
            };
            if(req.body.filter.rooms !== 'all'){
                if(req.body.filter.rooms === '4+'){
                    parseInt(resultTemp.rooms) > 3 ? null : resultTemp = false;
                }else{
                    objects[i].rooms === req.body.filter.rooms ? null : resultTemp = false;
                }
            }
            if(req.body.filter.statusOfObject !== 'all'){
                objects[i].stage === req.body.filter.statusOfObject ? null : resultTemp = false
            }
            if(req.body.filter.priceBegin){
                console.log(req.body.filter.priceBegin, objects[i].price.priceSales.replace(/\./g,''))
                parseInt(objects[i].price.priceSales.replace(/\./g,'')) > parseInt(req.body.filter.priceBegin) ? null : resultTemp = false;
            }
            if(req.body.filter.priceEnd){
                parseInt(objects[i].price.priceSales.replace(/\./g,'')) < parseInt(req.body.filter.priceEnd) ? null : resultTemp = false;
            }
            let check = await checkType(req.body.filter.typeOfObject, objects[i].typeOfObject);
            if(!check) resultTemp = false;

            if(resultTemp){
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
    }else if (types.apartment) {
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