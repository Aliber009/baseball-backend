const { fieldingPostService } = require('../services')

const getFieldingPost = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const fieldingPost = await fieldingPostService.getFieldingPost(options)
    res.json({success:true ,fieldingPost:fieldingPost})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFieldingPost }