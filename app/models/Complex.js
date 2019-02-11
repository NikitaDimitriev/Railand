const mongoose = require('mongoose');

module.exports = mongoose.model('Complex', {
    titleRu: { type: String, require: true },
    titleEn: { type: String, require: true },
   
    distanceToBitch: { type: String },
    distanсeToAiroport: { type: String },
    
    coordinat: {
        x: Number,
        y: Number
    },
    location: { type: String },
    descriptionRu: { type: String },
    descriptionEn: { type: String },
    typeOfObject: { type: String },
    address: { type: String },
    mainPhoto: { type: String },
    photo: { type: Array },
    
    infrastructure: { type: Array },
    active: { type: Boolean, default: true },
    code: {type: Number},
    video: {type: String},
    adminInfo:{
        owner:{type: String},
        ownerContacts:{type: String},
        address:{type: String},
        comments:{type: String}
      },
      objects:{
          type:Array
      }
})