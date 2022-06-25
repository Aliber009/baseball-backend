const PitchingPost = require('../models/pitchingPost.model')

const getPitchingPost = async(options)=>{
  try{
    if(!options.playerID){
    const pitchingPost = await PitchingPost.findAll({ limit:options.limit,offset:options.offset })
    return pitchingPost 
    }
    else{
      const pitchingPostplayerId = await PitchingPost.findAll({where:{playerID:options.playerID}})
      return pitchingPostplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving PitchingPost ! ')
  }
}
module.exports = { getPitchingPost }