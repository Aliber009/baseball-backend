const { pitchingService } = require('../services')

const getPitching = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const pitching = await pitchingService.getPitching(options)
    if(pitching)
    {
     res.json({success:true ,pitching:pitching})
    }
    else{
      res.json({success:false ,pitching:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getPitching }