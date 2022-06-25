const { pitchingPostService } = require('../services')

const getPitchingPost = async(req,res)=>{
  try{
    const {limit,offset,playerID } = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const pitchingPost = await pitchingPostService.getPitchingPost(options)
    if(pitchingPost)
    {
     res.json({success:true ,pitchingPost:pitchingPost})
    }
    else{
      res.json({success:false ,pitchingPost:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getPitchingPost }