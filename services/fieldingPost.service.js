const FieldingPost = require('../models/fieldingPost.model')

const getFieldingPost = async(options)=>{
  try{
    if(!options.playerID){
    const fieldingPost = await FieldingPost.findAll({ limit:options.limit,offset:options.offset })
    return fieldingPost 
    }
    else{
      const fieldingPostplayerId = await FieldingPost.findAll({where:{playerID:options.playerID}})
      return fieldingPostplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving FieldingPost ! ')
  }
}
module.exports = { getFieldingPost }