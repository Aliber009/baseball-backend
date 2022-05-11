const sequelize = require('../config/sequelize')
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

const getPeopleAlphaSorted = async(options,playerDetails)=>{
  try{
    const {nameFirst,nameLast,numberUpDown} = playerDetails
    const QueryNumberUpDown = numberUpDown? numberUpDown : 3
    if(!nameFirst || !nameLast){
      return "Please provide fn (firsName) , ln (lastName) in url"
    //const people = await People.findAll({where: {nameFirst : nameFirst , nameLast : nameLast  }, limit:options.limit,offset:options.offset ,order : [['nameFirst','ASC'],['nameLast','ASC']] })
    }
    else{
    const people = await People.findAll({where: {nameFirst : nameFirst , nameLast : nameLast  } ,order : [['nameFirst','ASC'],['nameLast','ASC']] })
    // now we get the player  and his  order in list 
    //const people = await sequelize.query("select row_number() over(), * from 'People' where nameFirst ='"+nameFirst+"' and nameLast ='"+nameLast+"'")
    if(people){
      return people
    } 
    else{
      //here the main code for not finding a player !
      // first we will alter the table and install an incremental id column 

      
    }
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving sorted people ! ')
  }
}

module.exports = { getPeople , getPeopleAlphaSorted}