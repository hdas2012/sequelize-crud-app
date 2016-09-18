"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'compositeIndex'
    },
    lastName: {
      type: DataTypes.STRING,
      unique: 'compositeIndex'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true    
    },
    age: {
      type: DataTypes.INTEGER,
      validate: { max: 55, min: 18 }
    },
    country: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    dateJoined: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    freezeTableName: true,
    getterMethods   : {
      address: function()  { return this.state + ', ' + this.country }
    },
    setterMethods   : {
      address: function(value) {
        var names = value.split(', ');
        this.setDataValue('country', names[0]);
        this.setDataValue('state', names[1]);
      },
    }
  });
    return User;
};
