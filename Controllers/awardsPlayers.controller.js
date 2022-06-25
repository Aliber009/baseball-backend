const { awardsPlayersService } = require('../services')

const getAwardsPlayers = async(req,res)=>{
  try{
    const {limit,offset, playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const awardsPlayers = await awardsPlayersService.getAwardsPlayers(options)
    if(awardsPlayers){
      res.json({success:true ,awardsPlayers:awardsPlayers})
    }
    else{
      res.json({success:true ,awardsPlayers:"not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsPlayers }