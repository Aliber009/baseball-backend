const { fieldingOFService } = require('../services')

const getFieldingOF = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const fieldingOF = await fieldingOFService.getFieldingOF(options)
    res.json({success:true ,fieldingOF:fieldingOF})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFieldingOF }