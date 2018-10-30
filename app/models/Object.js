const mongoose = require('mongoose');

module.exports = mongoose.model('Object', {
    title: {type: String, require: true},
    price: {type: Number, require: true},
    square: {type: String, require: true},
    distanceToBitch: {type: String},
    rooms: {type: Number},
    location:{
        x:String,
        y:String
    }
})