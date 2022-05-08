const Managers = require('../models/managers.model')

const getManagers = async(options)=>{
  try{
    
    const managers = await Managers.findAll({ limit:options.limit,offset:options.offset })
    return managers 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Managers ! ')
  }
}
module.exports = { getManagers }