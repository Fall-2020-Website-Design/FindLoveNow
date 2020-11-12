const db = require("../models");


/**
 * @param {Object} data 
 * @returns {Promise<Model>} create message instance  
 */
const createMessage = async (data) => {
    const newMessage = await db.Message.create({
        message : data.message,
        sender_id : data.requesterID, 
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
        where: { sender_id : userID},
        attributes: ['message', 'sender_id']
    })
    console.log(`${allMessages} is from service`)
    return allMessages
}


module.exports = {
    createMessage,
    findAllMessages
}