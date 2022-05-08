const ManagersHalf = require('../models/managersHalf.model')

const getManagersHalf = async(options)=>{
  try{
    
    const managersHalf = await ManagersHalf.findAll({ limit:options.limit,offset:options.offset })
    return managersHalf 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving ManagersHalf ! ')
  }
}
module.exports = { getManagersHalf }