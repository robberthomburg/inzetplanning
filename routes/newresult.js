var express = require('express');
var mongojs = require('mongojs');

var db = mongojs("planning", ["employees"]);

var router = express.Router();

router.post ('/', function(req,res,next) {
  db.employees.insert({
      'firstname' : req.body.firstname ,
      'lastname' : req.body.lastname,
      'email' : req.body.email,
      'skill' : req.body.skill,
      'branche' : req.body.branche
    });
  //console.log(res.body);
  res.render('newresult');
})
module.exports = router;
