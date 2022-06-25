const { managersService } = require('../services')

const getManagers = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID}
    const managers = await managersService.getManagers(options)
    if(managers)
    {
     res.json({success:true ,managers:managers})
    }
    else{
      res.json({success:false ,managers:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getManagers }