'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Filter = sequelize.define('Filter', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        interested: {
            type: DataTypes.STRING,
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
        maxDistance: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        },
        ethinicity: {
            type: DataTypes.STRING
        }
    },
        {
            freezeTableName: true,
        });

        Filter.associate = models => {
            Filter.belongsTo(models.User, { foreignKey: "userID" })
        }

    return Filter;
}; 