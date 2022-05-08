const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const FieldingPost = sequelize.define('FieldingPost',
    {
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        round : {type : DataTypes.TEXT},
        POS : {type : DataTypes.TEXT},
        G : {type : DataTypes.INTEGER},
        GS : {type : DataTypes.INTEGER},
        InnOuts : {type : DataTypes.INTEGER},
        PO : {type : DataTypes.INTEGER},
        A : {type : DataTypes.INTEGER},
        E : {type : DataTypes.INTEGER},
        DP : {type : DataTypes.INTEGER},
        TP : {type : DataTypes.INTEGER},
        PB : {type : DataTypes.INTEGER},
        SB : {type : DataTypes.INTEGER},
        CS : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'FieldingPost'
    });
 
FieldingPost.sync()
module.exports=FieldingPost
