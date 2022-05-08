const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const Batting = sequelize.define('Batting',
    {
        playerID : {type : DataTypes.TEXT,primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        stint : {type : DataTypes.INTEGER},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        G : {type : DataTypes.INTEGER},
        G_batting : {type : DataTypes.INTEGER},
        AB : {type : DataTypes.INTEGER},
        R : {type : DataTypes.INTEGER},
        H : {type : DataTypes.INTEGER},
        HR : {type : DataTypes.INTEGER},
        RBI : {type : DataTypes.INTEGER},
        SB : {type : DataTypes.INTEGER},
        CS : {type : DataTypes.INTEGER},
        BB : {type : DataTypes.INTEGER},
        SO : {type : DataTypes.INTEGER},
        IBB : {type : DataTypes.INTEGER},
        HBP : {type : DataTypes.INTEGER},
        SH : {type : DataTypes.INTEGER},
        SF : {type : DataTypes.INTEGER},
        GIDP : {type : DataTypes.INTEGER},
        G_old : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'Batting'
    });
 
Batting.sync()
module.exports=Batting
