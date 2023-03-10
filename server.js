const express = require('express');
const serverConfig = require('./config/server.config')
const server =  express();
const spaceCentreRoutes = require('./routes/spaceCentreRountes');

const bodyParser = require('body-parser');

server.use(bodyParser.json());

// server.use(server.router);
// routes.initialize(server);

server.listen(serverConfig.PORT,()=>{
    console.log(`server started at ${serverConfig.PORT}`);
});

server.use('/space-centres',spaceCentreRoutes);