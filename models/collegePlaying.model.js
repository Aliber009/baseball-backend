const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const CollegePlaying = sequelize.define('CollegePlaying',
    {
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        schoolID : {type : DataTypes.TEXT},
        yearID : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'CollegePlaying'
    });
 
CollegePlaying.sync()
module.exports=CollegePlaying
