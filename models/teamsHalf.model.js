const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const TeamsHalf = sequelize.define('TeamsHalf',
    {
        yearID : {type : DataTypes.INTEGER},
        lgID : {type : DataTypes.TEXT},
        teamID : {type : DataTypes.TEXT , primaryKey:true},
        Half : {type : DataTypes.TEXT},
        divID : {type : DataTypes.TEXT},
        DivWin : {type : DataTypes.TEXT},
        Rank : {type : DataTypes.INTEGER},
        G : {type : DataTypes.INTEGER},
        W : {type : DataTypes.INTEGER},
        L : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'TeamsHalf'
    });
 
TeamsHalf.sync()
module.exports=TeamsHalf
