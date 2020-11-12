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
    
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Match',
                key: 'requesterID'
            }
        },
    },
    {
        freezeTableName: true,
    });

    return Message;
}; 