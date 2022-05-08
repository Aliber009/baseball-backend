const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const Schools = sequelize.define('Schools',
    {
        schoolID : {type : DataTypes.TEXT , primaryKey:true},
        name_full : {type : DataTypes.TEXT},
        city : {type : DataTypes.TEXT},
        state : {type : DataTypes.TEXT},
        country : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'Schools'
    });
 
Schools.sync()
module.exports=Schools
