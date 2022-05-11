const sequelize=require('../config/sequelize')

 const { DataTypes } = require('sequelize');
  //const People = sequelize.models.People
 const People = sequelize.define('People',
    {
      row_number : {type : DataTypes.TEXT , primaryKey :true  },
      playerID : {type : DataTypes.TEXT , primaryKey :true  },
      birthYear : {type : DataTypes.INTEGER},
      birthMonth : {type : DataTypes.INTEGER},
      birthDay : {type : DataTypes.INTEGER},
      birthCountry : {type : DataTypes.TEXT},
      birthState : {type : DataTypes.TEXT},
      birthCity : {type : DataTypes.TEXT},
      deathYear : {type : DataTypes.INTEGER},
      deathMonth : {type : DataTypes.INTEGER},
      deathDay : {type : DataTypes.INTEGER},
      deathCountry : {type : DataTypes.TEXT},
      deathState : {type : DataTypes.TEXT},
      deathCity : {type : DataTypes.TEXT},
      nameFirst : {type : DataTypes.TEXT},
      nameLast : {type : DataTypes.TEXT},
      nameGiven : {type : DataTypes.TEXT},
      weight : {type : DataTypes.INTEGER},
      height : {type : DataTypes.INTEGER},
      bats : {type : DataTypes.TEXT},
      throws : {type : DataTypes.TEXT},
      debut : {type : DataTypes.TEXT},
      finalGame : {type : DataTypes.TEXT},
      retroID : {type : DataTypes.TEXT},
      bbrefID : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'PeopleSorted'
    });
 
People.sync()
module.exports=People
