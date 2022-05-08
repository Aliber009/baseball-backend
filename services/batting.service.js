const Batting = require('../models/batting.model')

const getBatting = async(options)=>{
  try{
    
    const batting = await Batting.findAll({ limit:options.limit,offset:options.offset })
    return batting 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Batting ! ')
  }
}
module.exports = { getBatting }