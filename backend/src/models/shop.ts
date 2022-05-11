var mongoose = require('mongoose');
var { Schema } = mongoose;

const shopSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String
    },
    province: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    neighbourhood: {
        required: true,
        type: String
    },
    street: {
        required: true,
        type: String
    },
    buildingNo: {
        required: true,
        type: String
    },
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Shop', shopSchema);