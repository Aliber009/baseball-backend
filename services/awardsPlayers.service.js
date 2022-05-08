const AwardsPlayers = require('../models/awardsPlayers.model')

const getAwardsPlayers = async(options)=>{
  try{
    
    const awardsPlayers = await AwardsPlayers.findAll({ limit:options.limit,offset:options.offset })
    return awardsPlayers 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsPlayers ! ')
  }
}
module.exports = { getAwardsPlayers }