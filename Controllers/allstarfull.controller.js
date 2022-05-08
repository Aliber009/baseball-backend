const { allstarfullService } = require('../services')

const getAllstarfull = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const allstarfull = await allstarfullService.getAllstarfull(options)
    res.json({success:true ,allstarfull:allstarfull})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getAllstarfull }