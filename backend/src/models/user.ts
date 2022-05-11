var mongoose = require('mongoose');
var { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('User', userSchema);