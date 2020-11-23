'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Filter = sequelize.define('Filter', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gender: {
            type: DataTypes.STRING,
            validate: {
                isIn: [["male", "female", "both"]]
            }
        },
        location: {
            type: DataTypes.STRING,
        },
        minAge: {
            type: DataTypes.INTEGER
        },
        maxAge: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        },
    },
        {
            freezeTableName: true,
        });

        Filter.associate = models => {
            Filter.belongsTo(models.User, { foreignKey: "userID" })
        }

    return Filter;
}; 