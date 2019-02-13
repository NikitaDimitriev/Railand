const Articles = require('../models/Articles');
const ObjectId = require('mongodb').ObjectID;
const ba64 = require('ba64');

exports.createArticle = createArticle;
exports.getAllArticles = getAllArticles;
exports.getArticleById = getArticleById;

async function createArticle(req, res) {
    let imageName='';
    let extention='';
    let photo = [];
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
        let article = await Articles.create({
            name: req.body.name,
            author: req.body.author,
            mainPhoto: 'photo/' + imageName + '.' + extention,
            photo: photo,
            text: req.body.text
        });
        res.json(article).end();
    } catch (error) {
        console.log(error)
    }
}

async function getAllArticles(req, res) {
    try {
        let articles = await Articles.find({});
        res.json(articles).end();
    } catch (error) {

    }
}

async function getArticleById(req, res) {
    try {
        let articles = await Articles.findOne({ _id: ObjectId(req.params.id) });
        res.json(articles).end();
    } catch (error) {

    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}