const FieldingOF = require('../models/fieldingOF.model')

const getFieldingOF = async(options)=>{
  try{
    if(!options.playerID){
    const fieldingOF = await FieldingOF.findAll({ limit:options.limit,offset:options.offset })
    return fieldingOF 
    }
    else{
      const fieldingOFplayerId = await FieldingOF.findAll({where:{playerID:options.playerID}})
      return fieldingOFplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving FieldingOF ! ')
  }
}
module.exports = { getFieldingOF }