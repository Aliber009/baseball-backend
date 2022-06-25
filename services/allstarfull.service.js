const AllstarFull = require('../models/allstarfull.model')

const getAllstarfull = async(options)=>{
  try{
    if(!options.playerID){
    const allstarfull = await AllstarFull.findAll({ limit:options.limit,offset:options.offset })
    return allstarfull 
    }
    else{
      const allstarfullplayerId = await AllstarFull.findAll({where:{playerID:options.playerID}})
      return allstarfullplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving allstarfull ! ')
  }
}

module.exports = { getAllstarfull }