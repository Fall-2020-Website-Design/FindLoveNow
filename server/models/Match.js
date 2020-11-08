'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
        matchID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'userID'
            }
        },

        // array that contains userID for accepted and rejected.
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

    // Match.associate = models => {
    //     Match.belongsTo(models.User, { foreignKey: "matchID" })
    // }

    return Match;
}; 