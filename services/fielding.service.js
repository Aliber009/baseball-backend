const Fielding = require('../models/fielding.model')

const getFielding = async(options)=>{
  try{
    
    const fielding = await Fielding.findAll({ limit:options.limit,offset:options.offset })
    return fielding 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Fielding ! ')
  }
}
module.exports = { getFielding }