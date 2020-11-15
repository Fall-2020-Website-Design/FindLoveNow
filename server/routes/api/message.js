/**
 * @module api/message
 */

const express = require('express');
const router = new express.Router();
const messageController = require('../../controllers/message.js');
const validatorErrors = require('../../middleware/validatorErrors');


/**
 * 
 *
 * @memberof module:api/message
 * @name POST /create
 */
router.post('/create',
    [
        validatorErrors
    ]
, messageController.createMessage)

/**
 * 
 *
 * @memberof module:api/message
 * @name GET /message/allmessage
 */
router.get('/allmessage',
    [
        validatorErrors
    ]
, messageController.findAllMessages)



module.exports = router;