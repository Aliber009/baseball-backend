const AwardsSharePlayers = require('../models/awardsSharePlayers.model')

const getAwardsSharePlayers = async(options)=>{
  try{
    if(!options.playerID){
    const awardsSharePlayers = await AwardsSharePlayers.findAll({ limit:options.limit,offset:options.offset })
    return awardsSharePlayers
    }
    else{
      const awardsSharePlayersplayerId = await AwardsSharePlayers.findAll({where:{playerID:options.playerID}})
      return awardsSharePlayersplayerId
    } 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsSharePlayers ! ')
  }
}
module.exports = { getAwardsSharePlayers }