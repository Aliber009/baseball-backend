const Teams = require('../models/teams.model')

const getTeams = async(options)=>{
  try{
    
    const teams = await Teams.findAll({ limit:options.limit,offset:options.offset })
    return teams 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving teams ! ')
  }
}
module.exports = { getTeams }