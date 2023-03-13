const app = require('./index')
const serverConfig=require("./config/db.config");

app.listen(serverConfig.PORT,()=>{
    console.log(`server started at ${serverConfig.PORT}`);
});