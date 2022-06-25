const Managers = require('../models/managers.model')

const getManagers = async(options)=>{
  try{
    if(!options.playerID){
    const managers = await Managers.findAll({ limit:options.limit,offset:options.offset })
    return managers 
    }
    else{
      const managersplayerId = await Managers.findAll({where:{playerID:options.playerID}})
      return managersplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Managers ! ')
  }
}
module.exports = { getManagers }