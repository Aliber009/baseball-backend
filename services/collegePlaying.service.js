const CollegePlaying = require('../models/collegePlaying.model')

const getCollegePlaying = async(options)=>{
  try{
    
    const collegePlaying = await CollegePlaying.findAll({ limit:options.limit,offset:options.offset })
    return collegePlaying 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving CollegePlaying ! ')
  }
}
module.exports = { getCollegePlaying }