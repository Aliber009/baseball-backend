const { Op } = require('sequelize')
const sequelize = require('../config/sequelize')
const People = require('../models/people.model')



const getPeople = async(limit, startswith)=>{
  // Add the option to get the starts with options
  const endOrder = limit?limit:10
  if(!startswith) {
  try
  {
    const people = await People.findAll({ limit:endOrder  })
    return people 
  }
  catch(e)
  {
      console.log('err',e)
      console.log('error retreiving people ! ')
  }
 }
 else{
  const people = await People.findOne({where: { playerID : startswith },attributes:['playerID','nameFirst','nameLast','row_number'] })
  if(people)
  {
    const rownumber = people.row_number
    const endLimit = parseInt(rownumber)+parseInt(endOrder)-1
    const [orderedPlayers,metadata] = await sequelize.query('select "playerID","nameFirst","nameLast" from "PeopleSorted" where "row_number" >= \''+rownumber+'\' AND "row_number" <= \''+endLimit+'\' ');
    return orderedPlayers
  }
 }
}

const getPeopleAlphaSorted = async(options,playerDetails)=>{
  try{
    const {nameFirst,nameLast,numberUpDown} = playerDetails
    const QueryNumberUpDown = parseInt(numberUpDown)? parseInt(numberUpDown) : 3
    if(!nameFirst || !nameLast){
      return "Please provide fn (firsName) , ln (lastName) in url"
    }
    else{
    const people = await People.findOne({where: {nameFirst : nameFirst , nameLast : nameLast  },attributes:['playerID','nameFirst','nameLast'] })
    // now we get the player  and his  order in list 
    //in SEQULIZE always use [Op.] and never $Op ($ op are deprecated ! )
    if(people){
    /*const orderOfPlayer = parseInt(people.row_number)
      const UpRowNumber = orderOfPlayer + QueryNumberUpDown
      const DownRowNumber = orderOfPlayer - QueryNumberUpDown<0? 0: orderOfPlayer - QueryNumberUpDown */
      return people
    } 
    else{
      // we add the player to the BD sort it and delete it after :
      const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      const playerID = nameFirst.replace(/\s/g, '')+nameLast+getRandomInt(0,5)+getRandomInt(0,9); 
      const newPlayer = await People.create({playerID:playerID, nameFirst : nameFirst , nameLast : nameLast})
      //now we will sort all the table : 
      const sortedTable = '(SELECT *,row_number() over(ORDER BY "nameFirst" COLLATE "fr_FR" ASC, "nameLast" COLLATE "fr_FR" ASC ) as roworder FROM "PeopleSorted") as sortedPlayers'
      const [newPlayerOrder,metadata] = await sequelize.query('select roworder from '+sortedTable+' where "playerID" = \''+playerID+'\' ')
      //now we have the order the fake player
      const UpRowNumber = parseInt(newPlayerOrder[0].roworder) + QueryNumberUpDown
      const DownRowNumber = parseInt(newPlayerOrder[0].roworder) - parseInt(QueryNumberUpDown) - 1 <0 ? 0: parseInt(newPlayerOrder[0].roworder) -parseInt(QueryNumberUpDown) - 1
      //query to get rows up & down
      const [listPlayers, metadataPl ] = await sequelize.query('select "playerID","nameFirst","nameLast" from '+sortedTable+' where ("roworder" <= '+UpRowNumber+' AND "roworder" > '+DownRowNumber+')')

      //now we delete the added player
      await People.destroy({where:{playerID:playerID}})
      //return the output 
      return listPlayers 

    }
    }
  }
  catch(e){
      console.log('err',e)
      console.log('error retreiving sorted people ! ')
  }
}

module.exports = { getPeople , getPeopleAlphaSorted}