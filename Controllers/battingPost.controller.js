const { battingPostService } = require('../services')

const getBattingPost = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const battingPost = await battingPostService.getBattingPost(options)
    res.json({success:true ,battingPost:battingPost})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getBattingPost }