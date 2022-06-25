const { awardsManagersService } = require('../services')

const getAwardsManagers = async(req,res)=>{
  try{
    const {limit,offset ,playerID} = req.query
    const options = {limit:limit,offset:offset, playerID:playerID}
    const awardsManagers = await awardsManagersService.getAwardsManagers(options)
    if(awardsManagers){
      res.json({success:true ,awardsManagers:awardsManagers})
    }
    else{
      res.json({success:true ,awardsManagers:"not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsManagers }