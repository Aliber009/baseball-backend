const Appearances = require('../models/appearances.model')

const getAppearances = async(options)=>{
  try{
    if(!options.playerID){
    const apprearances = await Appearances.findAll({ limit:options.limit,offset:options.offset })
    return apprearances 
    }
    else{
      const apprearancesplayerId = await Appearances.findAll({where:{playerID:options.playerID}})
      return apprearancesplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Apprearances ! ')
  }
}
module.exports = { getAppearances }