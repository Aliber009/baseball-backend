const { appearancesService } = require('../services')

const getAppearances = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const appearances = await appearancesService.getAppearances(options)
    res.json({success:true ,appearances:appearances})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAppearances }