const { managersService } = require('../services')

const getManagers = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const managers = await managersService.getManagers(options)
    res.json({success:true ,managers:managers})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getManagers }