const Batting = require('../models/batting.model')

const getBatting = async(options)=>{
  try{
    if(!options.playerID){
    const batting = await Batting.findAll({ limit:options.limit,offset:options.offset })
    return batting 
    }
    else{
      const battingplayerId = await Batting.findAll({where:{playerID:options.playerID}})
      return battingplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Batting ! ')
  }
}
module.exports = { getBatting }