const Appearances = require('../models/appearances.model')

const getAppearances = async(options)=>{
  try{
    
    const apprearances = await Appearances.findAll({ limit:options.limit,offset:options.offset })
    return apprearances 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Apprearances ! ')
  }
}
module.exports = { getAppearances }