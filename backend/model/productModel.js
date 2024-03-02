const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    desc:String,
    images:[{
        image:String
    }],
    category:String,
    seller:String,
    stock:String,
    numofReviews:String,
    createAt:Date
});

const productModel = mongoose.model('product',productSchema)

module.exports = productModel