const Sequelize = require('sequelize');


const sequelize = new Sequelize('postgres://postgres:jesuisber@localhost:5432/baseball',{logging:false});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established with postgres successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 

  module.exports=sequelize