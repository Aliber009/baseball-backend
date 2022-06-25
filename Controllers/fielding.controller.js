const { fieldingService } = require('../services')

const getFielding = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID}
    const fielding = await fieldingService.getFielding(options)
    if(fielding)
    {
     res.json({success:true ,fielding:fielding})
    }
    else{
      res.json({success:false ,fielding:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFielding }