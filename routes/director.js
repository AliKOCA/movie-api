var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
const Director = require("../models/Director");

router.get('/', function (req, res, next) {
    const promise = Director.aggregate([
        {
            $lookup: {
                from: "movies",
                localField: "_id",
                foreignField: "director_id",
                as: "movies"
            }
        },
        {
            $unwind: {
                path: "$movies",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $group: {
                _id: {
                    _id: "$_id",
                    name: "$name",
                    surname: "$surname",
                    bio: "$bio"
                },
                movies: {
                    $push: '$movies'
                }
            }
        },
        {
            $project: {
                _id: "$_id._id",
                name: "$_id.name",
                surname: "$_id.surname",
                bio: "$_id.bio",
                movies: '$movies'
            }
        }
    ]);
    promise.then((data) => {
        res.json({ netice: "Tamam", veri: data });

    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err });
    });
});

router.get('/:director_id', function (req, res, next) {
    const promise = Director.aggregate([
        {
            $match: {
                "_id": mongoose.Types.ObjectId(req.params.director_id)
            }
        },
        {
            $lookup: {
                from: "movies",
                localField: "_id",
                foreignField: "director_id",
                as: "movies"
            }
        },
        {
            $unwind: {
                path: "$movies",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $group: {
                _id: {
                    _id: "$_id",
                    name: "$name",
                    surname: "$surname",
                    bio: "$bio"
                },
                movies: {
                    $push: '$movies'
                }
            }
        },
        {
            $project: {
                _id: "$_id._id",
                name: "$_id.name",
                surname: "$_id.surname",
                bio: "$_id.bio",
                movies: '$movies'
            }
        }
    ]);
    promise.then((data) => {
        res.json({ netice: "Tamam", veri: data });

    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err });
    });
});

router.post('/', function (req, res, next) {
    const director = new Director(req.body);

    const promise = director.save();
    promise.then((data) => {
        res.json({ netice: "Tamam", veri: data });
    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err });
    });
});

router.get('/:director_id', (req, res, next) => {
    const promise = Director.findById(req.params.director_id);
    promise.then((director) => {
        console.log(director);
        if (!director)
            next({ netice: 'The director was not found.', code: 99 });
        res.json({ netice: "Tamam", veri: director });
    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err.message });
    });
});

router.put('/:director_id', (req, res, next) => {
    const promise = Director.findByIdAndUpdate(
        req.params.director_id,
        req.body,
        { new: true });//Yeni veri gelsin.  
    promise.then((director) => {
        if (!director)
            next({ netice: "Hata!", hata: "Bulunanayan kayıt!" });
        res.json({ netice: "Tamam", veri: director });
    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err.message });
    });
});

router.delete('/:director_id', (req, res, next) => {
    const promise = Director.findByIdAndRemove(req.params.director_id);
    promise.then((director) => {
        if (!director)
            next({ netice: "Hata!", hata: "Bulunanayan kayıt!" });
        res.json({ netice: "Tamam", veri: director });
    }).catch((err) => {
        res.json({ netice: "Hata!", hata: err.message });
    });
});
module.exports = router;