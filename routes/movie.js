var express = require('express');
var router = express.Router();
const Movie = require("../models/Movie");

/* GET users listing. */
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
Bunlara gerek kalmadın aşağıdaki şekilde yapılabilir.    
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




/*
router.get('/', function (req, res, next) {
  const { title, category, country, year, imdb_score } = req.body;
  res.send({ "isim": "req.body" });
});
*/
module.exports = router;
