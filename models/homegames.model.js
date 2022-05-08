const sequelize=require('../config/sequelize')

 const { DataTypes } = require('sequelize');

 const HomeGames = sequelize.define('HomeGames',
    {
        yearkey : {type : DataTypes.BIGINT},
        leaguekey : {type : DataTypes.TEXT},
        teamkey : {type : DataTypes.TEXT ,primaryKey:true},
        parkkey : {type : DataTypes.TEXT},
        spanfirst : {type : DataTypes.TEXT},
        spanlast : {type : DataTypes.TEXT},
        games : {type : DataTypes.BIGINT},
        openings : {type : DataTypes.BIGINT},
        attendance : {type : DataTypes.BIGINT}
    },
    {
    timestamps:false,
    tableName: 'HomeGames'
    });
 
HomeGames.sync()
module.exports=HomeGames

