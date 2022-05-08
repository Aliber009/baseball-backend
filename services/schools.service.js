const Schools = require('../models/schools.model')

const getSchools = async(options)=>{
  try{
    
    const schools = await Schools.findAll({ limit:options.limit,offset:options.offset })
    return schools 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Schools ! ')
  }
}
module.exports = { getSchools }