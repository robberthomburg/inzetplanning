var express = require('express');
var mongojs = require('mongojs')

var emp = ["employee"];
var db = mongojs("planning", ["employees"]);

var router = express.Router();


/* GET employees page. */
router.get('/', function(req, res, next) {
  // res.render('employees', { title: 'Medewerkers' });
  //res.render('employee', { title: req.query.q });

  db.employees.find({ "email" : req.query.q }, function(err, emp){
    if(err) return;
    res.render('employee', { title: "Medewerker", emp: emp });
    //res.json(emp)
  })
});

db.close;
module.exports = router;
