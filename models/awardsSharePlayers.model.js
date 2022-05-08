const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const AwardsSharePlayers = sequelize.define('AwardsSharePlayers',
    {
        awardID : {type : DataTypes.TEXT,primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        lgID : {type : DataTypes.TEXT},
        playerID : {type : DataTypes.TEXT},
        pointsWon : {type : DataTypes.DOUBLE },
        pointsMax : {type : DataTypes.INTEGER},
        votesFirst : {type : DataTypes.DOUBLE }
    },
    {
    timestamps:false,
    tableName: 'AwardsSharePlayers'
    });
 
AwardsSharePlayers.sync()
module.exports=AwardsSharePlayers
