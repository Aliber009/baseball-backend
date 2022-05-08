const AwardsShareManagers = require('../models/awardsShareManagers.model')

const getAwardsShareManagers = async(options)=>{
  try{
    
    const awardsShareManagers = await AwardsShareManagers.findAll({ limit:options.limit,offset:options.offset })
    return awardsShareManagers 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving AwardsShareManagers ! ')
  }
}
module.exports = { getAwardsShareManagers }