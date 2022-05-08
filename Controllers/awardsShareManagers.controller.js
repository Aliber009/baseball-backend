const { awardsShareManagersService } = require('../services')

const getAwardsShareManagers = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const awardsShareManagers = await awardsShareManagersService.getAwardsShareManagers(options)
    res.json({success:true ,awardsShareManagers:awardsShareManagers})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAwardsShareManagers }