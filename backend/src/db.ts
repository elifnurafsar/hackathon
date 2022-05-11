var mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    catch (e: any) {
        console.log(e);
    }
}