const AwardsSharePlayers = require('../models/awardsSharePlayers.model')

const getAwardsSharePlayers = async(options)=>{
  try{
    
    const awardsSharePlayers = await AwardsSharePlayers.findAll({ limit:options.limit,offset:options.offset })
    return awardsSharePlayers 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsSharePlayers ! ')
  }
}
module.exports = { getAwardsSharePlayers }