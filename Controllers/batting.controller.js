const { battingService } = require('../services')

const getBatting = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const Batting = await battingService.getBatting(options)
    res.json({success:true ,Batting:Batting})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getBatting }