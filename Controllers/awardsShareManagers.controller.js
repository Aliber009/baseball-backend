const { awardsShareManagersService } = require('../services')

const getAwardsShareManagers = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const awardsShareManagers = await awardsShareManagersService.getAwardsShareManagers(options)
    if(awardsShareManagers){
      res.json({success:true ,awardsShareManagers:awardsShareManagers})
    }
    else{
      res.json({success:true ,awardsShareManagers:"not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsShareManagers }