const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors=require('cors')
// Connect to pstgres
const sequelize=require('./config/sequelize');
const routes = require('./routes')
    
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send("baseball app");
});



app.use('/api',routes)

server.listen(5000, () => {
  console.log('listening on *:5000');
});