const HallOfFame = require('../models/hallOfFame.model')

const getHallOfFame = async(options)=>{
  try{
    if(!options.playerID){
    const hallOfFame = await HallOfFame.findAll({ limit:options.limit,offset:options.offset })
    return hallOfFame 
    }
    else{
      const hallOfFameplayerId = await HallOfFame.findAll({where:{playerID:options.playerID}})
      return hallOfFameplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving HallOfFame ! ')
  }
}
module.exports = { getHallOfFame }