var mongoose = require('mongoose');
var { Schema }: any = mongoose;

const productSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number
    },
    taxRatio: {
        required: true,
        type: Number
    },
    imagePath: {
        required: true,
        type: String
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Product', productSchema);