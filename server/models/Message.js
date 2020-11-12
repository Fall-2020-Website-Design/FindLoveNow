'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        messageID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Match',
                key: 'matchID'
            }
        },
        message: {
            type: DataTypes.STRING
        },
    
        sender: {
            type: DataTypes.STRING
        },
    },
    {
        freezeTableName: true,
    });

    
    // Message.associate = models => {
    //     Message.belongsTo(models.Match, { foreignKey: "matchID" })
    // }

    return Message;
}; 