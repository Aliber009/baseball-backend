const FieldingPost = require('../models/fieldingPost.model')

const getFieldingPost = async(options)=>{
  try{
    
    const fieldingPost = await FieldingPost.findAll({ limit:options.limit,offset:options.offset })
    return fieldingPost 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving FieldingPost ! ')
  }
}
module.exports = { getFieldingPost }