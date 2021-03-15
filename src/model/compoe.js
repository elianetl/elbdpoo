let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const compoe = db.define("Compõe",
    {
        fk_Perfil_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
       fk_Publicacao_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    }
);

module.exports = compoe; 

// Eliane