const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: {type: String, require: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    phone: {type: String, require: false},
    addedObjects:{type: Array, require: false},
    registerDate: {type:Date, default: Date.now()}
})