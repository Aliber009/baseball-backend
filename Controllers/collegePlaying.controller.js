const { collegePlayingService } = require('../services')

const getCollegePlaying = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const collegePlaying = await collegePlayingService.getCollegePlaying(options)
    
    if(collegePlaying)
    {
     res.json({success:true ,collegePlaying:collegePlaying})
    }
    else{
      res.json({success:false ,collegePlaying:"Not found"})
    }
   
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getCollegePlaying }