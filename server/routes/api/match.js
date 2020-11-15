/**
 * @module api/match
 */

const express = require('express');
const router = new express.Router();
const matchController = require('../../controllers/match.js');
const validatorErrors = require('../../middleware/validatorErrors');


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
, matchController.reponse)

/**
 * 
 *
 * @memberof module:api/match
 * @name GET /find
 */
router.get('/find',
    [
        validatorErrors
    ]
, matchController.loadPotentialMatches)


/**
 * 
 *
 * @memberof module:api/match
 * @name GET /previous
 */
router.get('/previous',
    [
        validatorErrors
    ]
, matchController.previousMatch)

module.exports = router;