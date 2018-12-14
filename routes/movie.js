var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('movie: respond with a resource');
  res.json({ status: 1 });
});

module.exports = router;
