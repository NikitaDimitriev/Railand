const mongoose = require('mongoose');

module.exports = mongoose.model('Object', {
    title: {type: String, require: true},
    price: {type: String, require: true},
    area: {type: String, require: true},
    distanceToBitch: {type: String},
    distanseToAiroport: {type: String},
    floor:{type:String},
    badroom:{type: String},
    bathroom:{type:String},
    landArea:{type:String},
    lifeArea:{type:String},
    areaOfPool:{type:String},
    rooms: {type: String},
    location:{
        x:String,
        y:String
    }
})