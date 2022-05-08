const { teamsHalfService } = require('../services')

const getTeamsHalf = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const teamsHalf = await teamsHalfService.getTeamsHalf(options)
    res.json({success:true ,teamsHalf:teamsHalf})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getTeamsHalf }