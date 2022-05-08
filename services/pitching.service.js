const Pitching = require('../models/pitching.model')

const getPitching = async(options)=>{
  try{
    
    const pitching = await Pitching.findAll({ limit:options.limit,offset:options.offset })
    return pitching 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Pitching ! ')
  }
}
module.exports = { getPitching }