var express = require('express');
//var mongojs = require('mongojs')

//var emp = ["employee"];
//var db = mongojs("planning", ["employees"]);

var router = express.Router();

/* GET employees page. */
router.get('/', function(req, res, next) {
    res.render('newemployee', { title: "Nieuwe Medewerker"});
  })

module.exports = router;
