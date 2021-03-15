let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const comenta = db.define("Comenta",
    {
        fk_Publicacao_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
       fk_Usuario_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    }
);

module.exports = comenta; 

// Eliane