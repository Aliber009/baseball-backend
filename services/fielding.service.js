const Fielding = require('../models/fielding.model')

const getFielding = async(options)=>{
  try{
    if(!options.playerID){
    const fielding = await Fielding.findAll({ limit:options.limit,offset:options.offset })
    return fielding 
    }
    else{
      const fieldingplayerId = await Fielding.findAll({where:{playerID:options.playerID}})
      return fieldingplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Fielding ! ')
  }
}
module.exports = { getFielding }