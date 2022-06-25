const AwardsShareManagers = require('../models/awardsShareManagers.model')

const getAwardsShareManagers = async(options)=>{
  try{
    if(!options.playerID){
    const awardsShareManagers = await AwardsShareManagers.findAll({ limit:options.limit,offset:options.offset })
    return awardsShareManagers
    }
    else{
      const awardsShareManagersplayerId = await AwardsShareManagers.findAll({where:{playerID:options.playerID}})
      return awardsShareManagersplayerId
    } 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsShareManagers ! ')
  }
}
module.exports = { getAwardsShareManagers }