const { hallOfFameService } = require('../services')

const getHallOfFame = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const hallOfFame = await hallOfFameService.getHallOfFame(options)
    if(hallOfFame)
    {
     res.json({success:true ,hallOfFame:hallOfFame})
    }
    else{
      res.json({success:false ,hallOfFame:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getHallOfFame }