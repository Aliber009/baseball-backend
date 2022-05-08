const { hallOfFameService } = require('../services')

const getHallOfFame = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const hallOfFame = await hallOfFameService.getHallOfFame(options)
    res.json({success:true ,hallOfFame:hallOfFame})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getHallOfFame }