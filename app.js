const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const serveStatic    = require('serve-static');
const AuthCtrl = require('./app/controllers/AuthCtrl');
const ObjectCtrl = require('./app/controllers/ObjectsCtrl');
const ArticlesCtrl = require('./app/controllers/ArticlesCtrl');
const MailCtrl = require('./app/controllers/MailCtrl');
const ComplexCtrl = require('./app/controllers/ComplexCtrl');

const db = 'mongodb://admin:nikitazeus789@ds157503.mlab.com:57503/railanddb';
// const db = 'mongodb://localhost:27017/RailandDB';

mongoose.connect(db, function(err, db) {
	if (err) {
		console.log("error:", err);
	} else {
  		console.log("Connected correctly to database", db.port);
  	}
});

const port = process.env.PORT || 80;

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(serveStatic(__dirname + "/client/dist"));
app.use(express.static(__dirname + '/upload'))


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
app.get('/api/get-objects-sales', ObjectCtrl.getObjectsSales);
app.get('/api/get-objects-rent', ObjectCtrl.getObjectsRent);
app.get('/api/get-objects-pagination-sales/:page/:perPage', ObjectCtrl.getObjectsPaginationSales);
app.get('/api/get-objects-pagination-rent/:page/:perPage', ObjectCtrl.getObjectsPaginationRent);
app.get('/api/get-object-by-id/:id', ObjectCtrl.getObjectById);
app.get('/api/get-info-sales', ObjectCtrl.getInfoSales);
app.get('/api/get-info-rent', ObjectCtrl.getInfoRent);
app.post('/api/get-objects-filters', ObjectCtrl.getFilter);
app.get('/api/get-objects', ObjectCtrl.getObjects);
app.delete('/api/delete-object/:id', ObjectCtrl.deleteObject);
app.put('/api/update-object', ObjectCtrl.updateObject);

app.post('/api/create-complex', ComplexCtrl.createComplex);
app.get('/api/get-complex', ComplexCtrl.getComplex);
app.get('/api/get-complex-by-id/:id', ComplexCtrl.getComplexById);
app.put('/api/update-complex', ComplexCtrl.updateComplex);
app.delete('/api/delete-complex/:id', ComplexCtrl.deleteComplex);

app.post('/api/create-article', ArticlesCtrl.createArticle);
app.get('/api/get-all-articles', ArticlesCtrl.getAllArticles);
app.get('/api/get-article-by-id/:id', ArticlesCtrl.getArticleById);

app.post('/api/send-order-mail', MailCtrl.sendMail);
app.post('/api/send-reserv-mail', MailCtrl.sendMailReserv);

app.listen(port);
console.log('Magic happens on port ' + port);
module.exports = app;