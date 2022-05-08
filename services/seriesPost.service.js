const SeriesPost = require('../models/seriesPost.model')

const getSeriesPost = async(options)=>{
  try{
    
    const seriesPost = await SeriesPost.findAll({ limit:options.limit,offset:options.offset })
    return seriesPost 
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving SeriesPost ! ')
  }
}
module.exports = { getSeriesPost }