const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const passport       = require('passport'); 
const LocalStrategy  = require('passport-local').Strategy;
const serveStatic    = require('serve-static');
const AuthCtrl = require('./app/controllers/AuthCtrl');
const ObjectCtrl = require('./app/controllers/ObjectsCtrl');
const ArticlesCtrl = require('./app/controllers/ArticlesCtrl');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:nikitazeus789@ds157503.mlab.com:57503/railanddb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// const db = process.env.MONGODB_ADDON_URI || 'mongodb://localhost:27017/RailandDB';
// mongoose.connect(db, function(err, db) {
// 	if (err) {
// 		console.log("error:", err);
// 	} else {
//   		console.log("Connected correctly to database", db.port);
//   	}
// });

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(serveStatic(__dirname + "/client/dist"));


require('./app/routes');
app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.post('/api/sign-up-user', AuthCtrl.signUp);
app.post('/api/log-in-user', AuthCtrl.logIn);
app.get('/api/get-current-user/:id', AuthCtrl.getUserId);

app.post('/api/create-object', ObjectCtrl.createObject);
app.get('/api/get-objects', ObjectCtrl.getObjects);
app.get('/api/get-objects-pagination', ObjectCtrl.getObjectsPagination);
app.get('/api/get-object-by-id/:id', ObjectCtrl.getObjectById);

app.post('/api/create-article', ArticlesCtrl.createArticle);
app.get('/api/get-all-articles', ArticlesCtrl.getAllArticles);
app.get('/api/get-article-by-id', ArticlesCtrl.getArticleById);

app.listen(port);
console.log('Magic happens on port ' + port);
module.exports = app;