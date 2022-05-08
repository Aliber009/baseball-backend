const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const ManagersHalf = sequelize.define('ManagersHalf',
    {
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        inseason : {type : DataTypes.INTEGER},
        half : {type : DataTypes.INTEGER},
        G : {type : DataTypes.INTEGER},
        W : {type : DataTypes.INTEGER},
        L : {type : DataTypes.INTEGER},
        rank : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'ManagersHalf'
    });
 
ManagersHalf.sync()
module.exports=ManagersHalf
