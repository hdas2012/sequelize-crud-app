var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  try{
    var query = {};
    query.where = {
      $or: [
        {state: "California"},
        {state: "Arizona"}
      ],
      age: {
        $between: [20, 40]
      },
      lastName: {
        $ilike: '%user%'
      }
    };
    query.include = [{
        model: models.group
    }];
    models.user.findAll(query).then(function(users) {
      res.render('viewUsers', { users: users, req: req });
    });  
  }
  catch(e){
    console.log(e.toString());
  }
});

module.exports = router;
