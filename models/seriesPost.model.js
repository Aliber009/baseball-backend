const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const SeriesPost = sequelize.define('SeriesPost',
    {
        yearID : {type : DataTypes.INTEGER},
        round : {type : DataTypes.TEXT},
        teamIDwinner : {type : DataTypes.TEXT,primaryKey:true},
        lgIDwinner : {type : DataTypes.TEXT},
        teamIDloser : {type : DataTypes.TEXT},
        lgIDloser : {type : DataTypes.TEXT},
        wins : {type : DataTypes.INTEGER},
        losses : {type : DataTypes.INTEGER},
        ties : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'SeriesPost'
    });
 
SeriesPost.sync()
module.exports=SeriesPost
