const MessageService = require("../services/message.js");



/**
 * @typedef {import('express').RequestHandler} RequestHandler}
 */
/**
    @type {RequestHandler}
*/
const createMessage = async (req, res, next) => {
    const { message , sender_id , recipient_id } = req.body;

    data  = {
        message,
        sender_id,
        recipient_id
    }
    try {
        const newMessage = await MessageService.createMessage(data)
        return res.json(newMessage);
    }
    catch (error) {
        next(error);
    }
}

/**
    @type {RequestHandler}
*/
const findAllMessages = async(req,res,next) => {
    const  { userID } = req.params
    try {
        const allMessages = await MessageService.findAllMessages(userID)
        return res.json(allMessages);
    }
    catch(error) {
        next(error)
    }
} 

module.exports = {
    createMessage,
    findAllMessages,
}
