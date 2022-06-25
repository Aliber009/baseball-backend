const express = require('express');
const app = express();
const http = require('http');
//ssl
const fs = require('fs');
const https = require('https');

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


//SSL
var privateKey  = fs.readFileSync('api.baseball-gifts.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('api.baseball-gifts.com/fullchain.pem', 'utf8');
//var ca = [ fs.readFileSync('ca_bundle.crt', 'utf8') ];
var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, app);


httpsServer.listen(5000,()=>{console.log('listening on *:5000');});

/* server.listen(5000, () => {
  console.log('listening on *:5000');
}); */