const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const Appearances = sequelize.define('Appearances',
    {
        yearID : {type : DataTypes.INTEGER},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        G_all : {type : DataTypes.INTEGER},
        GS : {type : DataTypes.INTEGER},
        G_batting : {type : DataTypes.INTEGER},
        G_defense : {type : DataTypes.INTEGER},
        G_p : {type : DataTypes.INTEGER},
        G_c : {type : DataTypes.INTEGER},
        G_1b : {type : DataTypes.INTEGER},
        G_2b : {type : DataTypes.INTEGER},
        G_3b : {type : DataTypes.INTEGER},
        G_ss : {type : DataTypes.INTEGER},
        G_lf : {type : DataTypes.INTEGER},
        G_cf : {type : DataTypes.INTEGER},
        G_rf : {type : DataTypes.INTEGER},
        G_of : {type : DataTypes.INTEGER},
        G_dh : {type : DataTypes.INTEGER},
        G_ph : {type : DataTypes.INTEGER},
        G_pr : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'Appearances'
    });
 
Appearances.sync()
module.exports=Appearances
