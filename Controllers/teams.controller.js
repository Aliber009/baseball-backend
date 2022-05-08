const { teamsService } = require('../services')

const getTeams = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const teams = await teamsService.getTeams(options)
    res.json({success:true ,teams:teams})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getTeams }