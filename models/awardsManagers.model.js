const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const AwardsManagers = sequelize.define('AwardsManagers',
    {
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        awardID : {type : DataTypes.TEXT},
        yearID : {type : DataTypes.INTEGER},
        lgID : {type : DataTypes.TEXT},
        tie : {type : DataTypes.TEXT},
        notes : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'AwardsManagers'
    });
 
AwardsManagers.sync()
module.exports=AwardsManagers
