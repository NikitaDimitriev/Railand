const Articles = require('../models/Articles');
const ObjectId = require('mongodb').ObjectID;

exports.createArticle = createArticle;
exports.getAllArticles = getAllArticles;
exports.getArticleById = getArticleById;

async function createArticle(req, res) {
    try {
        let article = await Articles.create({
            name: req.body.name,
            comment: req.body.comment
        });
        res.json(article).end();
    } catch (error) {

    }
}

async function getAllArticles(req, res){
    try{
        let articles = await Articles.find({});
        res.json(articles).end();
    }catch(error){

    }
}

async function getArticleById(req, res){
    try{
        let articles = await Articles.find({_id:ObjectId(req.params.id)});
        res.json(articles).end();
    }catch(error){

    }
}