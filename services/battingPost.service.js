const BattingPost = require('../models/battingPost.model')

const getBattingPost = async(options)=>{
  try{
    if(!options.playerID){
    const battingPost = await BattingPost.findAll({ limit:options.limit,offset:options.offset })
    return battingPost 
    }
    else{
      const battingPostplayerId = await BattingPost.findAll({where:{playerID:options.playerID}})
      return battingPostplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving BattingPost ! ')
  }
}
module.exports = { getBattingPost }