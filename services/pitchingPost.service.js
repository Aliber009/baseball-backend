const PitchingPost = require('../models/pitchingPost.model')

const getPitchingPost = async(options)=>{
  try{
    
    const pitchingPost = await PitchingPost.findAll({ limit:options.limit,offset:options.offset })
    return pitchingPost 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving PitchingPost ! ')
  }
}
module.exports = { getPitchingPost }