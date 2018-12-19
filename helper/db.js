//mongodb://<dbuser>:<dbpassword>@ds117164.mlab.com:17164/movie-api
const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://localhost/movie-api",
        {
            useNewUrlParser: true,
            useCreateIndex: true
        });
    mongoose.connection.on('open', () => {
        console.log("MongoDB: Bağlantı sağlandı.");
    });
    mongoose.connection.on('error', (err) => {
        console.log("MongoDB Bağlantı Hatası: " + err);
    });
    mongoose.Promise = global.Promise;
}