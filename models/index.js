/**
 * This file will be used for the following purposes :
 * 1. Create the DB connection with the help of Sequelize
 * 2. Export all the functionalites of the models model through this file.
 * 
 * One of the advantage of using index.js file is, other file trying to import this files, just need
 * to provide the module name
 * 
 * For example : require(./models); // No need to specify the file name index.js
 */

const env = process.env.NODE_ENV || 'development';
const config = require("../config/db.config")[env];
const Sequelize = require("sequelize");

//console.log("ENV: " + env);
 
/**
 * Creating the DB connection
 */
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.spaceCS = require('./spaceResearchcentres')(sequelize, Sequelize);
db.LVCount =  require('./launchVehiclesCount')(sequelize,Sequelize);

db.spaceCS.belongsToMany(db.LVCount,{
    through: "spaceCS_LVCount",
    foreignKey: "LVC_id", 
    otherKey: "id"
});




module.exports = db;