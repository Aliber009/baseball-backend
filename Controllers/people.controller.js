const { peopleService } = require('../services')

const getPeople = async(req,res)=>{
  try{
    const {limit,startswith,playerID} = req.query
    const people = await peopleService.getPeople(limit,startswith,playerID)
    if(people)
    {
     res.json({success:true ,people:people})
    }
    else{
      res.json({success:false ,people:"Not found"})
    }
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
const getSortedPeople = async(req,res)=>{
  try{
    const {limit,offset,fn,ln,qty} = req.query

    const options = {limit:limit,offset:offset}
    const people = await peopleService.getPeopleAlphaSorted(options,{nameFirst:fn,nameLast:ln,numberUpDown:qty})
    res.json({success:true ,player:people})
  }
  catch(e){
    console.log("error",e)
    res.json({success:false ,error:"error"})
  }
}
module.exports = { getPeople,getSortedPeople }