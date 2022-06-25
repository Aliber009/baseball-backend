const { homegamesService } = require('../services')

const getHomeGames = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const homegames = await homegamesService.getHomeGames(options)
    if(homegames)
    {
     res.json({success:true ,homegames:homegames})
    }
    else{
      res.json({success:false ,homegames:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getHomeGames }