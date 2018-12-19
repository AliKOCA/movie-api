var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require("jsonwebtoken");

const User = require("../models/Users")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
bcrypt.compare(password, hash, function (err, res) {
      console.log(res);
    });
*/

router.post('/register', function (req, res, next) {
  const { username, password } = req.body;
  bcrypt.hash(password, null, null, function (err, hash) {
    const user = new User({
      username, password: hash
    });
    const promise = user.save();
    promise
      .then((data) => {
        res.json(data);
      }).catch((err) => {
        res.send(err);
      })
  });
});

router.post('/authenticate', function (req, res, next) {
  const { username, password } = req.body;
  User.findOne({
    username
  }, (err, user) => {
    if (err) {
      res.json({
        status: false,
        message: err.message
      });
    } else {
      if (!user) {
        res.json({
          status: false,
          message: "Authentication failed, user not found!"
        });
      } else {
        bcrypt.compare(password, user.password, function (err, netice) {
          if (netice) {
            const payload = { username };
            const token = jwt.sign(payload, req.app.get('api_secret_key'),
              {
                expiresIn: 720 /*12 saat*/
              });
            res.json({
              status: true,
              token
            });
          } else {
            res.json({
              status: false,
              message: "Authentication failed, wrong password!"
            });
          }
        });
        /*
                bcrypt.compare(password, user.password).then((result) => {
                  if (!result) {
                    res.json({
                      status: false,
                      message: "Authentication failed, wrong password!"
                    });
                  } else {
                    /*
                    const payload = { username };
                    const token = jwt.sign(payload, req.app.get('api_secret_key'),
                      {
                        expiresIn: 720 //12 saat
                      });
        res.json({
          status: true,
          netice: "Tamam"
        });
        
      } //if (!result) else
      
      });*/

      }
    }
  });
});

module.exports = router;
