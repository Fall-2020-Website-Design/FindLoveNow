/**
 * @module api/match
 */

const express = require('express');
const router = new express.Router();
const matchController = require('../../controllers/match.js');


/**
 * 
 *
 * @memberof module:api/match
 * @name POST /response
 */
router.post('/response',
    [

    ]
, matchController.reponse)

/**
 * 
 *
 * @memberof module:api/match
 * @name GET /find
 */
router.post('/find',
    [

    ]
, matchController.loadPotentialMatches)

module.exports = router;