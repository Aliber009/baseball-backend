const { pitchingPostService } = require('../services')

const getPitchingPost = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const pitchingPost = await pitchingPostService.getPitchingPost(options)
    res.json({success:true ,pitchingPost:pitchingPost})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getPitchingPost }