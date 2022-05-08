const { fieldingService } = require('../services')

const getFielding = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const fielding = await fieldingService.getFielding(options)
    res.json({success:true ,fielding:fielding})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFielding }