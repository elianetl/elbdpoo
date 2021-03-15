let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const posta = db.define("Posta",
    {
        fk_Usuario_id: {
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

module.exports = posta; 