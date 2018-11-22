const mongoose = require('mongoose');

module.exports = mongoose.model('Object', {
    titleRu: {type: String, require: true},
    titleEn: {type: String, require: true},
    price: {type: String, require: true},
    area: {type: String, require: true},
    distanceToBitch: {type: String},
    distanceToAiroport: {type: String},
    floor:{type:String},
    badroom:{type: String},
    bathroom:{type:String},
    landArea:{type:String},
    lifeArea:{type:String},
    areaOfPool:{type:String},
    rooms: {type: String},
    coordinat:{
        x:String,
        y:String
    },
    location:{type:String},
    descriptionRu:{type:String},
    descriptionEn:{type:String},
    typeOfObject:{type:String},
    address: {type:String},
    mainPhoto:{type:String}
})