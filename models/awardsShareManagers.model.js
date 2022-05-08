const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const AwardsShareManagers = sequelize.define('AwardsShareManagers',
    {
        awardID : {type : DataTypes.TEXT,primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        lgID : {type : DataTypes.TEXT},
        playerID : {type : DataTypes.TEXT},
        pointsWon : {type : DataTypes.INTEGER},
        pointsMax : {type : DataTypes.INTEGER},
        votesFirst : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'AwardsShareManagers'
    });
 
AwardsShareManagers.sync()
module.exports=AwardsShareManagers
