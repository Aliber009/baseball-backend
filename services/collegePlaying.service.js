const CollegePlaying = require('../models/collegePlaying.model')

const getCollegePlaying = async(options)=>{
  try{
    if(!options.playerID){
    const collegePlaying = await CollegePlaying.findAll({ limit:options.limit,offset:options.offset })
    return collegePlaying 
    }
    else{
      const collegePlayingplayerId = await CollegePlaying.findAll({where:{playerID:options.playerID}})
      return collegePlayingplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving CollegePlaying ! ')
  }
}
module.exports = { getCollegePlaying }