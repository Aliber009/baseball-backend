const HallOfFame = require('../models/hallOfFame.model')

const getHallOfFame = async(options)=>{
  try{
    
    const hallOfFame = await HallOfFame.findAll({ limit:options.limit,offset:options.offset })
    return hallOfFame 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving HallOfFame ! ')
  }
}
module.exports = { getHallOfFame }