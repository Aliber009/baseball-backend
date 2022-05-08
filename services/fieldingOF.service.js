const FieldingOF = require('../models/fieldingOF.model')

const getFieldingOF = async(options)=>{
  try{
    
    const fieldingOF = await FieldingOF.findAll({ limit:options.limit,offset:options.offset })
    return fieldingOF 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving FieldingOF ! ')
  }
}
module.exports = { getFieldingOF }