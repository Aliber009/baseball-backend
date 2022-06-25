const FieldingOFsplit = require('../models/fieldingOFsplit.model')

const getFieldingOFsplit = async(options)=>{
  try{
    if(!options.playerID){
    const fieldingOFsplit = await FieldingOFsplit.findAll({ limit:options.limit,offset:options.offset })
    return fieldingOFsplit
    }
    else{
      const fieldingOFsplitplayerId = await FieldingOFsplit.findAll({where:{playerID:options.playerID}})
      return fieldingOFsplitplayerId
    } 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving FieldingOFsplit ! ')
  }
}
module.exports = { getFieldingOFsplit }