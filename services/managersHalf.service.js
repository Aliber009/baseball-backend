const ManagersHalf = require('../models/managersHalf.model')

const getManagersHalf = async(options)=>{
  try{
    if(!options.playerID){
    const managersHalf = await ManagersHalf.findAll({ limit:options.limit,offset:options.offset })
    return managersHalf 
    }
    else{
      const managersHalfplayerId = await ManagersHalf.findAll({where:{playerID:options.playerID}})
      return managersHalfplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving ManagersHalf ! ')
  }
}
module.exports = { getManagersHalf }