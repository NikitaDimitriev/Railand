const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    login: {type: String, require: true},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, require: true},
    password: {type: String, require: true},
    phone: {type: String, require: false},
    addedObjects:{type: Array, require: false},
    registerDate: {type:Date, default: Date.now()}
})