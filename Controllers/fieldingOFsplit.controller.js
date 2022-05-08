const { fieldingOFsplitService } = require('../services')

const getFieldingOFsplit = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const fieldingOFsplit = await fieldingOFsplitService.getFieldingOFsplit(options)
    res.json({success:true ,fieldingOFsplit:fieldingOFsplit})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFieldingOFsplit }