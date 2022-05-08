const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const AllstarFull = sequelize.define('AllstarFull',
    {
        playerID : {type : DataTypes.TEXT , primaryKey :true  },
        yearID : {type : DataTypes.BIGINT},
        gameNum : {type : DataTypes.BIGINT},
        gameID : {type : DataTypes.TEXT},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        GP : {type : DataTypes.BIGINT},
        startingPos : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'AllstarFull'
    });
 
AllstarFull.sync()
module.exports=AllstarFull
