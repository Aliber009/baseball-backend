const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const BattingPost = sequelize.define('BattingPost',
    {
        yearID : {type : DataTypes.INTEGER ,primaryKey:true},
        round : {type : DataTypes.TEXT},
        playerID : {type : DataTypes.TEXT},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        G : {type : DataTypes.INTEGER},
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
        GIDP : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'BattingPost'
    });
 
BattingPost.sync()
module.exports=BattingPost
