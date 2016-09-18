var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  try{
    var query = {};
    if(req.query.state != undefined){
      query.where = {
        state: req.query.state
      };
      query.include = [{
          model: models.group
      }];
      models.user.findAll(query).then(function(users) {
        res.render('viewUsers', { users: users, req: req });
      });
    }else if(req.query.email != undefined){
      query.where = {
        email: req.query.email
      };
      query.include = [{
          model: models.group
      }];
      models.user.findOne(query).then(function(user) {
        res.render('viewUsers', { users: [(user ? user : {})], req: req });
      });
    }else{
      models.user.findAll({
        limit: 100,
        include: [{
            model: models.group
          }]
      }).then(function(users) {
        res.render('viewUsers', { users: users, req: req });
      });
    }
    
  }
  catch(e){
    console.log(e.toString());
  }
});

router.post('/', function(req, res, next) {
  try{
    models.user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
      },{
      where: { email : req.body.email }
      })
      .then(function () { 
        res.redirect("/view-users");
      });
  }
  catch(e){
    console.log(e.toString());
  }
});

module.exports = router;
