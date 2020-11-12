'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
        matchID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'userID'
            }
        },

        // The person that your currently looking at 
        addresseeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'userID'
            }
        },
        // 1 for success
        // 0 for rejected
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: [[0, 1]]
            }
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