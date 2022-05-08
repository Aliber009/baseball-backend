const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const Salaries = sequelize.define('Salaries',
    {
        yearID : {type : DataTypes.INTEGER},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        salary : {type : DataTypes.DOUBLE }
    },
    {
    timestamps:false,
    tableName: 'Salaries'
    });
 
Salaries.sync()
module.exports=Salaries
