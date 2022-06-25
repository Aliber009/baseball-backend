const { fieldingOFsplitService } = require('../services')

const getFieldingOFsplit = async(req,res)=>{
  try{
    const {limit,offset,playerID } = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const fieldingOFsplit = await fieldingOFsplitService.getFieldingOFsplit(options)
    if(fieldingOFsplit)
    {
     res.json({success:true ,fieldingOFsplit:fieldingOFsplit})
    }
    else{
      res.json({success:false ,fieldingOFsplit:"Not found"})
    }
    
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getFieldingOFsplit }