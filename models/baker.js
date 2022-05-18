// dependencies
const mongoose = require('mongoose')
const {Schema} = mongoose

// schema
const bakerSchema = new Schema({

})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker