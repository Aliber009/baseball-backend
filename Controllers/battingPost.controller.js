const { battingPostService } = require('../services')

const getBattingPost = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const battingPost = await battingPostService.getBattingPost(options)
    if(battingPost)
    {
     res.json({success:true ,battingPost:battingPost})
    }
    else{
      res.json({success:false ,battingPost:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getBattingPost }