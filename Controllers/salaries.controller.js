const { salariesService } = require('../services')

const getSalaries = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const salaries = await salariesService.getSalaries(options)
    if(salaries)
    {
     res.json({success:true ,salaries:salaries})
    }
    else{
      res.json({success:false ,salaries:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getSalaries }