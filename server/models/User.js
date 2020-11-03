'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                 isAlpha : true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
        {
            freezeTableName: true,
        });

    User.associate = models => {
        User.hasOne(models.Match, { foreignKey: "userID" }),
        User.hasOne(models.Profile, { foreignKey: "userID" }),
        User.hasOne(models.Filter, { foreignKey: "userID" })
    }

    return User;
}; 