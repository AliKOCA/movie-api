var express = require('express');
var router = express.Router();
const Movie = require("../models/Movie");

router.get('/', function (req, res, next) {
  const promise = Movie.find({});
  promise.then((data) => {
    res.json({ netice: "Tamam", veri: data });
  }).catch((err) => {
    res.json({ netice: "Hata!", hata: err });
  });
});

router.get('/between/:yilIlk/:yilSon', function (req, res, next) {
  /*   const yilIlk = req.params.yilIlk;
    const yilSon = req.params.yilSon; */
  const { yilIlk, yilSon } = req.params;
  const promise = Movie.find({
    year: { "$gte": parseInt(yilIlk), "$lte": parseInt(yilSon) }
  }).sort({ year: 1 });
  promise.then((data) => {
    res.json({ netice: "Tamam", veri: data });
  }).catch((err) => {
    res.json({ netice: "Hata!", hata: err });
  });
});

router.get('/top10', function (req, res, next) {
  const promise = Movie.find({}).limit(10).sort({ imdb_score: -1 });
  promise.then((data) => {
    res.json({ netice: "Tamam", veri: data });
  }).catch((err) => {
    res.json({ netice: "Hata!", hata: err });
  });
});

router.get('/:movie_id', (req, res, next) => {
  const promise = Movie.findById(req.params.movie_id);
  promise.then((movie) => {
    console.log(movie);
    if (!movie)
      next({ netice: 'The movie was not found.', code: 99 });
    res.json({ netice: "Tamam", veri: movie });
  }).catch((err) => {
    res.json({ netice: "Hata!", hata: err.message });
  });
});

router.delete('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id);
  promise.then((movie) => {
    console.log(movie);
    if (!movie)
      next({ netice: 'The movie was not found.', code: 99 });
    res.json({ netice: "Tamam", veri: movie });
  }).catch((err) => {
    res.json({ netice: "Hata!", hata: err.message });
  });
});

router.put('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(
    req.params.movie_id,
    req.body,
    { new: true });//Yeni veri gelsin.

  promise.then((movie) => {
    if (!movie)
      next({ netice: "Hata!", hata: "Bulunanayan kayıt!" });
    res.json({ netice: "Tamam", veri: movie });
  }).catch((err) => {
    res.json({ netice: "Hata!", hata: err.message });
  });
});

router.post('/', function (req, res, next) {
  /*
  const { title, category, country, year, imdb_score } = req.body;
  const movie = new Movie({
    title: title,
    category: category,
    country: country,
    year: year,
    imdb_score: imdb_score
  });
     movie.save((err, data) => {
      if (err)
        res.json({ netice: "Hata!", hata: err });
      else
        res.json({ netice: "Tamam", veri: data });
    }); 
Bunlara gerek kalmadın aşağıdaki şekilde de yapılabilir.    
    */
  const movie = new Movie(req.body);
  //const movie = new Movie({});//Hata verdirmek için.
  const promise = movie.save();
  promise.then((data) => {
    res.json({ netice: "Tamam", veri: data });
  }).catch((err) => {
    res.json({ netice: "Hata!", hata: err });
  });
});
module.exports = router;
