const express = require('express');
const serverConfig = require('./config/server.config')


const spaceCentreRoutes = require('./routes/spaceCentreRountes');

const bodyParser = require('body-parser');
const server =  express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));



// server.use(server.router);
// routes.initialize(server);

const db = require('./models');


db.sequelize.sync({force : true}).then(()=>{
    console.log("tables dropped and recreated")
    //init();
})


server.listen(serverConfig.PORT,()=>{
    console.log(`server started at ${serverConfig.PORT}`);
});



function init() {

    //Initializing few Categories
    var categories = [
        {
            name: "Electronics",
            description: "This category will contain all the electronic products"
        },
        {
            name: "KitchenItems",
            description: "This category will contain all the Kitchen related products"
        }
    ];

    Category.bulkCreate(categories).then(() => {
        console.log("Categories table is initialized");
    }).catch(err => {
        console.log("Error while initializing categories table");
    })


    /**
     * Adding roles
     */
     Role.create({
        id:1,
        name:"user"
    });
    Role.create({
        id:2,
        name:"admin"
    })

}

server.use('/space-centres',spaceCentreRoutes);

