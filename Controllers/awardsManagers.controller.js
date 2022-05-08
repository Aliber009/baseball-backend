const { awardsManagersService } = require('../services')

const getAwardsManagers = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const awardsManagers = await awardsManagersService.getAwardsManagers(options)
    res.json({success:true ,awardsManagers:awardsManagers})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsManagers }