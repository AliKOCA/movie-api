var express = require('express');
var router = express.Router();
const Director = require("../models/Director");
 
router.get('/', function (req, res, next) {
    const promise = Director.find({});
    promise.then((data) => {
        res.json({ netice: "Tamam", veri: data });
    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err });
    });
});

router.post('/', function (req, res, next) {
    const director = new Director(req.body);
    //const movie = new Movie({});//Hata verdirmek için.
    const promise = director.save();
    promise.then((data) => {
        res.json({ netice: "Tamam", veri: data });
    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err });
    });
});

module.exports = router;