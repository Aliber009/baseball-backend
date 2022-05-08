const { collegePlayingService } = require('../services')

const getCollegePlaying = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const collegePlaying = await collegePlayingService.getCollegePlaying(options)
    res.json({success:true ,collegePlaying:collegePlaying})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getCollegePlaying }