const FieldingOFsplit = require('../models/fieldingOFsplit.model')

const getFieldingOFsplit = async(options)=>{
  try{
    
    const fieldingOFsplit = await FieldingOFsplit.findAll({ limit:options.limit,offset:options.offset })
    return fieldingOFsplit 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving FieldingOFsplit ! ')
  }
}
module.exports = { getFieldingOFsplit }