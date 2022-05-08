const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const Fielding = sequelize.define('Fielding',
    {
        playerID : {type : DataTypes.TEXT, primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        stint : {type : DataTypes.INTEGER},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        POS : {type : DataTypes.TEXT},
        G : {type : DataTypes.INTEGER},
        GS : {type : DataTypes.INTEGER},
        InnOuts : {type : DataTypes.INTEGER},
        PO : {type : DataTypes.INTEGER},
        A : {type : DataTypes.INTEGER},
        E : {type : DataTypes.INTEGER},
        DP : {type : DataTypes.INTEGER},
        PB : {type : DataTypes.INTEGER},
        WP : {type : DataTypes.INTEGER},
        SB : {type : DataTypes.INTEGER},
        CS : {type : DataTypes.INTEGER},
        ZR : {type : DataTypes.DOUBLE }
    },
    {
    timestamps:false,
    tableName: 'Fielding'
    });
 
Fielding.sync()
module.exports=Fielding
