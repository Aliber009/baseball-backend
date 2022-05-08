const { peopleService } = require('../services')

const getPeople = async(req,res)=>{
  try{
    const {limit,offset} = req.query
    const options = {limit:limit,offset:offset}
    const people = await peopleService.getPeople(options)
    res.json({success:true ,people:people})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getPeople }