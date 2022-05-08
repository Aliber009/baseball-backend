const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const HallOfFame = sequelize.define('HallOfFame',
    {
        playerID : {type : DataTypes.TEXT,primaryKey:true},
        yearid : {type : DataTypes.INTEGER},
        votedBy : {type : DataTypes.TEXT},
        ballots : {type : DataTypes.INTEGER},
        needed : {type : DataTypes.INTEGER},
        votes : {type : DataTypes.INTEGER},
        inducted : {type : DataTypes.TEXT},
        category : {type : DataTypes.TEXT},
        needed_note : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'HallOfFame'
    });
 
HallOfFame.sync()
module.exports=HallOfFame
