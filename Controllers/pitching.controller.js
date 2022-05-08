const { pitchingService } = require('../services')

const getPitching = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const pitching = await pitchingService.getPitching(options)
    res.json({success:true ,pitching:pitching})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getPitching }