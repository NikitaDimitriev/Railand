const Articles = require('../models/Articles');
const ObjectId = require('mongodb').ObjectID;

exports.createArticle = createArticle;
exports.getAllArticles = getAllArticles;
exports.getArticleById = getArticleById;

async function createArticle(req, res) {
    try {
        let article = await Articles.create({
            name: req.body.name,
            author: req.body.author,
            mainPhoto: mainPhoto,
            photo: req.body.photo,
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
        let articles = await Articles.find({ _id: ObjectId(req.params.id) });
        res.json(articles).end();
    } catch (error) {

    }
}