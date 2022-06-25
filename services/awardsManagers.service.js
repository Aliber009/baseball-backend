const AwardsManagers = require('../models/awardsManagers.model')

const getAwardsManagers = async(options)=>{
  try{
    if(!options.playerID){
    const awardsManagers = await AwardsManagers.findAll({ limit:options.limit,offset:options.offset })
    return awardsManagers 
    }
    else{
      const awardsManagersplayerId = await AwardsManagers.findAll({where:{playerID:options.playerID}})
      return awardsManagersplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsManagers ! ')
  }
}
module.exports = { getAwardsManagers }