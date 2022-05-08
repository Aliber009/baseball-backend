const AwardsManagers = require('../models/awardsManagers.model')

const getAwardsManagers = async(options)=>{
  try{
    
    const awardsManagers = await AwardsManagers.findAll({ limit:options.limit,offset:options.offset })
    return awardsManagers 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsManagers ! ')
  }
}
module.exports = { getAwardsManagers }