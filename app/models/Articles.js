const mongoose = require('mongoose');

module.exports = mongoose.model('Articles', {
    name: {type:String},
    author: {type:String},
    createDate:{type: Date, default: Date.now()},
    mainPhoto: {type:String},
    photo:{type:Object},
    text:{type:Object}
})