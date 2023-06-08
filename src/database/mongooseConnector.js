const mongoose = require("mongoose")

const { DATABASE } = require("../Settings/Config")

async function connectMongo() {
    mongoose.connect(DATABASE.mongooseConnection).then(x => console.log("MongoDB bağlantısı kuruldu!")).catch(err => console.log(err));
}

module.exports = { connectMongo }