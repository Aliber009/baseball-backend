const { awardsSharePlayersService } = require('../services')

const getAwardsSharePlayers = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const awardsSharePlayers = await awardsSharePlayersService.getAwardsSharePlayers(options)
    if(awardsSharePlayers){
      res.json({success:true ,awardsSharePlayers:awardsSharePlayers})
    }
    else{
      res.json({success:true ,awardsSharePlayers:"not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsSharePlayers }