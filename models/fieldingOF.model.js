const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const FieldingOF = sequelize.define('FieldingOF',
    {
        playerID : {type : DataTypes.TEXT,primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        stint : {type : DataTypes.INTEGER},
        Glf : {type : DataTypes.INTEGER},
        Gcf : {type : DataTypes.INTEGER},
        Grf : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'FieldingOF'
    });
 
FieldingOF.sync()
module.exports=FieldingOF
