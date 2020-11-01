'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        accepted: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        rejeceted: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        previous: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true,
    });

    Match.associate = models => {
        Match.belongsTo(models.User, { foreignKey: "userID" })
    }

    return Match;
}; 