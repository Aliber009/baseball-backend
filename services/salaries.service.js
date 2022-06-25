const Salaries = require('../models/salaries.model')

const getSalaries = async(options)=>{
  try{
    if(!options.playerID){
    const salaries = await Salaries.findAll({ limit:options.limit,offset:options.offset })
    return salaries 
    }
    else{
      const salariesplayerId = await Salaries.findAll({where:{playerID:options.playerID}})
      return salariesplayerId
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving Salaries ! ')
  }
}
module.exports = { getSalaries }