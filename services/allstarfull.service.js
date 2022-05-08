const AllstarFull = require('../models/allstarfull.model')

const getAllstarfull = async(options)=>{
  try{
    
    const allstarfull = await AllstarFull.findAll({ limit:options.limit,offset:options.offset })
    return allstarfull 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving allstarfull ! ')
  }
}
module.exports = { getAllstarfull }