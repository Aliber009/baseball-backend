const { peopleService } = require('../services')

const getPeople = async(req,res)=>{
  try{
    const {limit,startswith} = req.query
    const startswithProcessed = startswith.replace("'","''")
    const people = await peopleService.getPeople(limit,startswithProcessed)
    res.json({success:true ,players:people})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
const getSortedPeople = async(req,res)=>{
  try{
    const {limit,offset,fn,ln,qty} = req.query
    const fnProcessed = fn.replace("'","''")
    const lnProcessed = ln.replace("'","''")
    const options = {limit:limit,offset:offset}
    const people = await peopleService.getPeopleAlphaSorted(options,{nameFirst:fnProcessed,nameLast:lnProcessed,numberUpDown:qty})
    res.json({success:true ,player:people})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getPeople,getSortedPeople }