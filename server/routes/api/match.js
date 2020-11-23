/**
 * @module api/match
 */

const express = require('express');
const router = new express.Router();
const matchController = require('../../controllers/match.js');
const validatorErrors = require('../../middleware/validatorErrors');
const userMiddleware = require('../../middleware/user.js')
const {check, param, header} = require('express-validator');


/**
 * 
 *
 * @memberof module:api/match
 * @name POST /response
 */
router.post('/response',
    [
        validatorErrors
    ]
, matchController.response)

/**
 * 
 *
 * @memberof module:api/match
 * @name GET /find
 */
router.get('/find/:userID',
    [
        validatorErrors
    ]
, matchController.loadPotentialMatches)


/**
 * 
 *
 * @memberof module:api/match
 * @name GET /previous/:userID
 */
router.get('/previous',
    [
        validatorErrors
    ]
, matchController.previousMatch)

/**
 * 
 * @memberof module:api/match
 * @name GET /allmatches/:userID
 */
router.get('/allmatches/:userID',
    [  
    validatorErrors
    ]
, matchController.allMatches)


/**
 * 
 * @memberof module:api/match
 * @name GET /allMatches/:userID
 *
 */
router.get('/all/:userID',
    [
        validatorErrors
    ],
    matchController.userMatches)

module.exports = router;