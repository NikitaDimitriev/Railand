const mongoose = require('mongoose');

module.exports = mongoose.model('Object', {
    titleRu: { type: String, require: true },
    titleEn: { type: String, require: true },
    price: { type: String, require: true },
    area: { type: String, require: true },
    distanceToBitch: { type: String },
    distanсeToAiroport: { type: String },
    floor: { type: String },
    badroom: { type: String },
    bathroom: { type: String },
    landArea: { type: String },
    lifeArea: { type: String },
    areaOfPool: { type: String },
    rooms: { type: String },
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
    price: {
        currencySales: { type: String },
        priceSales: { type: String },
        currencyRent: { type: String },
        priceRent: { type: String }
    },
    property: { type: Array },
    sales: { type: String },
    rent: { type: String },
    stage: { type: String },
    infrastructure: { type: Array },
    features: { type: Array },
    topOfList: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    code: {type: String},
    video: {type: String},
    adminInfo:{
        owner:{type: String},
        ownerContacts:{type: String},
        address:{type: String},
        comments:{type: String}
      }
})