const Pitching = require('../models/pitching.model')

const getPitching = async(options)=>{
  try{
    if(!options.playerID){
    const pitching = await Pitching.findAll({ limit:options.limit,offset:options.offset })
    return pitching 
    }
    else{
      const pitchingplayerId = await Pitching.findAll({where:{playerID:options.playerID}})
      return pitchingplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Pitching ! ')
  }
}
module.exports = { getPitching }