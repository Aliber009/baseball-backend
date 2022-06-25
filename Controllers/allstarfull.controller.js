const { allstarfullService } = require('../services')

const getAllstarfull = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID,playerID}
    const allstarfull = await allstarfullService.getAllstarfull(options)
    if(allstarfull)
    {
     res.json({success:true ,allstarfull:allstarfull})
    }
    else{
      res.json({success:false ,allstarfull:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
const getAllstarfullbyPlayerId=async(req,res)=>{
  try{
   const { playerID } = req.query
   const allstarfullplayerId = await allstarfullService.getAllstarfullbyPlayerId(playerID);
   res.json({success:true,allstarfull:allstarfullplayerId})
  }
  catch(e)
  {
    res.json({success:false,error:e})
  }
}
module.exports = { getAllstarfull , getAllstarfullbyPlayerId }