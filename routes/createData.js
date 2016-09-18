var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res, next) {
  if(req.body.dataType === "user"){
    try{
      models.user.bulkCreate(JSON.parse(req.body.userData),{ validate: true }).then(function() {
        res.send("Data created. You can now close this tab.");
      }).catch(function(errors) {
        res.send("Following error occured: <br/>",errors);
      });
    }catch(e){
      console.log(e.toString());
    }
  }else if(req.body.dataType === "group"){
    try{
      models.group.bulkCreate(JSON.parse(req.body.groupData)).then(function() {
        res.send("Data created. You can now close this tab.");
      }).catch(function(errors) {
        res.send("Following error occured: <br/>",errors);
      });
    }catch(e){
      console.log(e.toString());
    }
  }
});

module.exports = router;
