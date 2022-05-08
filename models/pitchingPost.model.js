const sequelize=require('../config/sequelize')
const { DataTypes } = require('sequelize');

const PitchingPost = sequelize.define('PitchingPost',
    {
        playerID : {type : DataTypes.TEXT , primaryKey:true},
        yearID : {type : DataTypes.INTEGER},
        round : {type : DataTypes.TEXT},
        teamID : {type : DataTypes.TEXT},
        lgID : {type : DataTypes.TEXT},
        W : {type : DataTypes.INTEGER},
        L : {type : DataTypes.INTEGER},
        G : {type : DataTypes.INTEGER},
        GS : {type : DataTypes.INTEGER},
        CG : {type : DataTypes.INTEGER},
        SHO : {type : DataTypes.INTEGER},
        SV : {type : DataTypes.INTEGER},
        IPouts : {type : DataTypes.BIGINT},
        H : {type : DataTypes.INTEGER},
        ER : {type : DataTypes.INTEGER},
        HR : {type : DataTypes.INTEGER},
        BB : {type : DataTypes.INTEGER},
        SO : {type : DataTypes.INTEGER},
        BAOpp : {type : DataTypes.DOUBLE },
        ERA : {type : DataTypes.DOUBLE },
        IBB : {type : DataTypes.INTEGER},
        WP : {type : DataTypes.INTEGER},
        HBP : {type : DataTypes.INTEGER},
        BK : {type : DataTypes.INTEGER},
        BFP : {type : DataTypes.INTEGER},
        GF : {type : DataTypes.INTEGER},
        R : {type : DataTypes.INTEGER},
        SH : {type : DataTypes.INTEGER},
        SF : {type : DataTypes.INTEGER},
        GIDP : {type : DataTypes.INTEGER}
    },
    {
    timestamps:false,
    tableName: 'PitchingPost'
    });
 
PitchingPost.sync()
module.exports=PitchingPost
