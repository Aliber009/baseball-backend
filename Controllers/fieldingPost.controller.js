const { fieldingPostService } = require('../services')

const getFieldingPost = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const fieldingPost = await fieldingPostService.getFieldingPost(options)
    if(fieldingPost)
    {
     res.json({success:true ,fieldingPost:fieldingPost})
    }
    else{
      res.json({success:false ,fieldingPost:"Not found"})
    }
    
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFieldingPost }