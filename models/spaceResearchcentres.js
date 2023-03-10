module.exports = (sequelize, Sequelize) => {
    const spaceResearchCentres = sequelize.define('spaceresearchcentres', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        spaceCentreName: {
            type: Sequelize.STRING,
            required: true
        },
        location: { 
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        },
        govt_Collaboration: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        },
        nameOftheounder: { 
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        }
    },{
            tableName:"spaceResearchCentres"
        });

    return spaceResearchCentres;

}
