const { awardsPlayersService } = require('../services')

const getAwardsPlayers = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const awardsPlayers = await awardsPlayersService.getAwardsPlayers(options)
    res.json({success:true ,awardsPlayers:awardsPlayers})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsPlayers }