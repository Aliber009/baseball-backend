const HomeGames = require('../models/homegames.model')

const getHomeGames = async(options)=>{
  try{
    const homeGames = await HomeGames.findAll({ limit:options.limit,offset:options.offset })
    return homeGames 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving HomeGames ! ')
  }
}
module.exports = { getHomeGames }