const { fieldingOFService } = require('../services')

const getFieldingOF = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const fieldingOF = await fieldingOFService.getFieldingOF(options)
    if(fieldingOF)
    {
     res.json({success:true ,fieldingOF:fieldingOF})
    }
    else{
      res.json({success:false ,fieldingOF:"Not found"})
    }
    
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFieldingOF }