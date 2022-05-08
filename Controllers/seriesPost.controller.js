const { seriesPostService } = require('../services')

const getSeriesPost = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const seriesPost = await seriesPostService.getSeriesPost(options)
    res.json({success:true ,seriesPost:seriesPost})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getSeriesPost }