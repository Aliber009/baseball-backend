const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const AwardsPlayers = sequelize.define('AwardsPlayers',
    {
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        awardID : {type : DataTypes.TEXT},
        yearID : {type : DataTypes.BIGINT},
        lgID : {type : DataTypes.TEXT},
        tie : {type : DataTypes.TEXT},
        notes : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'AwardsPlayers'
    });
 
AwardsPlayers.sync()
module.exports=AwardsPlayers
