const { awardsSharePlayersService } = require('../services')

const getAwardsSharePlayers = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const awardsSharePlayers = await awardsSharePlayersService.getAwardsSharePlayers(options)
    res.json({success:true ,AwardsSharePlayers:awardsSharePlayers})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsSharePlayers }