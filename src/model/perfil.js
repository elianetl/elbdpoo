let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const perfil = db.define("Perfil",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome_usuario : {
            type: DataTypes.STRING,
            allowNull: false
        },
        descrição: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fk_Usuario_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    }
);

module.exports = perfil; 

