const { managersHalfService } = require('../services')

const getManagersHalf = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const managersHalf = await managersHalfService.getManagersHalf(options)
    if(managersHalf)
    {
     res.json({success:true ,managersHalf:managersHalf})
    }
    else{
      res.json({success:false ,managersHalf:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getManagersHalf }