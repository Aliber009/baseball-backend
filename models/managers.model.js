const sequelize=require('../config/sequelize')

 const { DataTypes } = require('sequelize');

 const Managers = sequelize.define('Managers',
    {
        playerID : {type : DataTypes.TEXT, primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        inseason : {type : DataTypes.INTEGER},
        G : {type : DataTypes.INTEGER},
        W : {type : DataTypes.INTEGER},
        L : {type : DataTypes.INTEGER},
        rank : {type : DataTypes.INTEGER},
        plyrMgr : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'Managers'
    });
 
Managers.sync()
module.exports=Managers
