var express = require('express');
var mongojs = require('mongojs')

var emps = ["employees"]
var db = mongojs("planning", emps);

var router = express.Router();


/* GET employees page. */
router.get('/', function(req, res, next) {
  // res.render('employees', { title: 'Medewerkers' });
  db.employees.find(function(err, emps){
    if(err) return;
    res.render('employees', {title: 'Medewerkers', emps : emps});
    //res.json(emps)
  })
});

db.close;
module.exports = router;
