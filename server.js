const express = require('express');
const serverConfig = require('./controllers/config/server.config')
const server =  express();

const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.listen(serverConfig.PORT,()=>{

    console.log(`server started at ${serverConfig.PORT}`);
})