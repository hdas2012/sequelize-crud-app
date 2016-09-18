"use strict";

module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define('group', {
    groupId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    groupName: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING  
    },
    description:{
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });
  return Group;
};
