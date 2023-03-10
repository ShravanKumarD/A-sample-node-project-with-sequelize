const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    //  'new_schema', 'root', '8008248021',
     {
        HOST:"localhost",
        USER:"root",
        PASSWORD:"8008248021",
        DB:"logbook",
        dialect:"mysql",
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:1000
        }
})
module.exports  = sequelize;
