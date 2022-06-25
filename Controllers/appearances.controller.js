const { appearancesService } = require('../services')

const getAppearances = async(req,res)=>{
  try{
    const {limit,offset,playerID} = req.query
    const options = {limit:limit,offset:offset,playerID:playerID}
    const appearances = await appearancesService.getAppearances(options)
    if(appearances)
    {
     res.json({success:true ,appearances:appearances})
    }
    else{
      res.json({success:false ,appearances:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAppearances }