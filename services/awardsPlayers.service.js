const AwardsPlayers = require('../models/awardsPlayers.model')

const getAwardsPlayers = async(options)=>{
  try{
    if(!options.playerID){
    const awardsPlayers = await AwardsPlayers.findAll({ limit:options.limit,offset:options.offset })
    return awardsPlayers 
    }
    else{
      const awardsPlayersplayerId = await AwardsPlayers.findAll({where:{playerID:options.playerID}})
      return awardsPlayersplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsPlayers ! ')
  }
}
module.exports = { getAwardsPlayers }