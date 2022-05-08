const sequelize=require('../config/sequelize')

 const { DataTypes } = require('sequelize');

 const Teams = sequelize.define('Teams',
    {
        yearID : {type : DataTypes.INTEGER},
        lgID : {type : DataTypes.TEXT},
        teamID : {type : DataTypes.TEXT , primaryKey:true},
        franchID : {type : DataTypes.TEXT},
        divID : {type : DataTypes.TEXT},
        Rank : {type : DataTypes.INTEGER},
        G : {type : DataTypes.INTEGER},
        Ghome : {type : DataTypes.INTEGER},
        W : {type : DataTypes.INTEGER},
        L : {type : DataTypes.INTEGER},
        DivWin : {type : DataTypes.TEXT},
        WCWin : {type : DataTypes.TEXT},
        LgWin : {type : DataTypes.TEXT},
        WSWin : {type : DataTypes.TEXT},
        R : {type : DataTypes.INTEGER},
        AB : {type : DataTypes.INTEGER},
        H : {type : DataTypes.INTEGER},
        HR : {type : DataTypes.INTEGER},
        BB : {type : DataTypes.INTEGER},
        SO : {type : DataTypes.INTEGER},
        SB : {type : DataTypes.INTEGER},
        CS : {type : DataTypes.INTEGER},
        HBP : {type : DataTypes.INTEGER},
        SF : {type : DataTypes.INTEGER},
        RA : {type : DataTypes.INTEGER},
        ER : {type : DataTypes.INTEGER},
        ERA : {type : DataTypes.DOUBLE },
        CG : {type : DataTypes.INTEGER},
        SHO : {type : DataTypes.INTEGER},
        SV : {type : DataTypes.INTEGER},
        IPouts : {type : DataTypes.BIGINT},
        HA : {type : DataTypes.INTEGER},
        HRA : {type : DataTypes.INTEGER},
        BBA : {type : DataTypes.INTEGER},
        SOA : {type : DataTypes.INTEGER},
        E : {type : DataTypes.BIGINT},
        DP : {type : DataTypes.BIGINT},
        FP : {type : DataTypes.DOUBLE },
        name : {type : DataTypes.TEXT},
        park : {type : DataTypes.TEXT},
        attendance : {type : DataTypes.BIGINT},
        BPF : {type : DataTypes.BIGINT},
        PPF : {type : DataTypes.BIGINT},
        teamIDBR : {type : DataTypes.TEXT},
        teamIDlahman45 : {type : DataTypes.TEXT},
        teamIDretro : {type : DataTypes.TEXT}
    },
    {
    timestamps:false,
    tableName: 'Teams'
    });
 
Teams.sync()
module.exports=Teams
