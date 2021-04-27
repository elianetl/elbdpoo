let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const usuario = db.define("Usuário",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ocupacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_de_nascimento: {
            type: DataTypes.Data,
            allowNull: false,
        },
        email: {
           type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
          type: DataTypes.INTEGER,
          allowNull:false,
        },
    }
);

module.exports = usuario; 

