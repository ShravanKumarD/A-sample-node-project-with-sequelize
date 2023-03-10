/**
 * this file will expose the functionalities of all the model files defined under 
 * the models directory
 */

//create the connection with the DB
const Sequelize = require('sequelize');
const config  = require('../config/db.config');

/**
 * creating the db connection 
 */
const sequelize = new Sequelize(
    config.DB, 
    config.USER,
    config.PASSWORD,{
        host : config.HOST,
        dialect : config.dialect,
        pool : {
            max : config.max,
            min : config.min,
            acquire:config.idle
        }
    })
/**
 * I need to expose the sequelize and category model
 */
var  db = {};

db.Sequelize =  Sequelize;
db.sequelize =  sequelize;
db.spaceCS = require('./spaceResearchcentres')(sequelize,Sequelize);

module.exports =  db;