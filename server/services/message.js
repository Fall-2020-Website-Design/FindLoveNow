const db = require("../models");
const { Op } = require("sequelize");


/**
 * @param {Object} data 
 * @returns {Promise<Model>} create message instance  
 */
const createMessage = async (data) => {
    const newMessage = await db.Message.create({
        message : data.message,
        sender_id : data.sender_id,
        recipient_id : data.recipient_id
    });

    console.log(`${newMessage} has been created in the function createMatch`);

    return newMessage;
};


/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} Find all message instance  
 */

const findAllMessages = async (userID) => {
    const allMessages = await db.Message.findAll({
        where: {
            [Op.or]: [
             { sender_id : userID } ,
             { recipient_id: userID }
            ]
        },
        order: [
            ['createdAt','DESC']
        ]
    })
    console.log(`${allMessages} is from service`)
    return allMessages
}


module.exports = {
    createMessage,
    findAllMessages
}