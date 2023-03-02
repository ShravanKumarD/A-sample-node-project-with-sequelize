if(process.env.NODE_ENV !=="prooduction"){
    require('dotenv').config();
}
module.exports = {
    PORT : process.env.PORT
}