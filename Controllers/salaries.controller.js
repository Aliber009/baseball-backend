const { salariesService } = require('../services')

const getSalaries = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const salaries = await salariesService.getSalaries(options)
    res.json({success:true ,salaries:salaries})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getSalaries }