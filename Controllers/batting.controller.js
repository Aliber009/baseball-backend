const { battingService } = require('../services')

const getBatting = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const Batting = await battingService.getBatting(options)
    if(Batting)
    {
     res.json({success:true ,Batting:Batting})
    }
    else{
      res.json({success:false ,Batting:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getBatting }