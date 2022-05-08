const { schoolsService } = require('../services')

const getSchools = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const schools = await schoolsService.getSchools(options)
    res.json({success:true ,schools:schools})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getSchools }