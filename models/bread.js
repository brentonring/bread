// // require mongoose
// const mongoose = require('mongoose')
// // creating shorthand for the Schema constructor
// const {Schema} = mongoose

// // schema
// const breadSchema = new Schema({
//   name: {type: String, required: true},
//   hasGluten: Boolean,
//   image: {type: String, default: 'http://placehold.it/500x500.png'}
// })

// // model and export
// const Bread = mongoose.model('Bread', breadSchema)
// module.exports = Bread

// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://cdn.pixabay.com/photo/2016/11/29/08/24/bakery-1868396_1280.jpg' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker'
    }
})

breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}.`
}

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
