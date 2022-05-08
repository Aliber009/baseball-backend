const TeamsHalf = require('../models/teamsHalf.model')

const getTeamsHalf = async(options)=>{
  try{
    
    const teamsHalf = await TeamsHalf.findAll({ limit:options.limit,offset:options.offset })
    return teamsHalf 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving TeamsHalf ! ')
  }
}
module.exports = { getTeamsHalf }