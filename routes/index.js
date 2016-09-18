var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var userData = [
    {group_id: "g001", firstName: 'John', lastName: 'Doe', age: 28, country: 'US', state: 'Florida', email: 'johndoe@example.com'},
    {group_id: "g002", firstName: 'User', lastName: 'Doe', age: 54, country: 'US', state: 'California', email: 'userdoe@example.com'},
    {group_id: "g001", firstName: 'Sample', lastName: 'User', age: 40, country: 'US', state: 'Florida', email: 'sampleuser@example.com'},
    {group_id: "g004", firstName: 'Example', lastName: 'User', age: 34, country: 'US', state: 'Arizona', email: 'exampleuser@example.com'},
    {group_id: "g004", firstName: 'Sample1', lastName: 'User1', age: 52, country: 'US', state: 'California', email: 'sample1user1@example.com'},
    {group_id: "g005", firstName: 'Sample2', lastName: 'User2', age: 22, country: 'US', state: 'California', email: 'sample2user2@example.com'}
  ];
  var groupData = [
    {groupId: "g001", groupName: "Group one", category: "Social", description: "Hey, I am a group"},
    {groupId: "g002", groupName: "Group two", category: "College", description: "Hey, I am a group"},
    {groupId: "g003", groupName: "Group three", category: "Project", description: "Hey, I am a group"},
    {groupId: "g004", groupName: "Group four", category: "Mission", description: "Hey, I am a group"},
    {groupId: "g005", groupName: "Group five", category: "Social", description: "Hey, I am a group"}
  ];
    res.render('home', { userData: userData, groupData: groupData });
});

module.exports = router;