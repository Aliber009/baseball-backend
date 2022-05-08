const People = require('../models/people.model')

const getPeople = async(options)=>{
  try{
    
    const people = await People.findAll({ limit:options.limit,offset:options.offset })
    return people 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving people ! ')
  }
}
module.exports = { getPeople }