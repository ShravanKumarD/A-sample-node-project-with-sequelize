module.exports = (sequelize,Sequelize)=>{

    const vehicleCount = sequelize.define("LVCOUNT",{
        LVC_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nameOftheSpaceStation:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        numberOfVehicles:{
            type:Sequelize.STRING,
            allowNull: false,

        },
        description:{
            type:Sequelize.STRING,
            allowNull:true
        }
    },{
        tableName:"LVCOUNT"
    })
    return vehicleCount;
}