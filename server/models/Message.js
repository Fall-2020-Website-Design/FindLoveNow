'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        messageID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type: DataTypes.STRING
        },

        // can we grab the matchID and use 
        // that to look at the requesterID?
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'userID',
                as: 'sender_id'
            }
        },
        recipient_id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'userID',
                as: 'recipient_id'
            }
        },
        
    },
    {
        freezeTableName: true,
    });

    return Message;
}; 