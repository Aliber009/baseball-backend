const { managersHalfService } = require('../services')

const getManagersHalf = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const managersHalf = await managersHalfService.getManagersHalf(options)
    res.json({success:true ,managersHalf:managersHalf})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getManagersHalf }