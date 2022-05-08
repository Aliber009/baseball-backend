const BattingPost = require('../models/battingPost.model')

const getBattingPost = async(options)=>{
  try{
    
    const battingPost = await BattingPost.findAll({ limit:options.limit,offset:options.offset })
    return battingPost 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving BattingPost ! ')
  }
}
module.exports = { getBattingPost }