/**
 * @module api/profile
 */

const express = require('express');
const router = new express.Router();
const ProfileControllers = require('../../controllers/profile.js')
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

/**
 * 
 *
 * @memberof module:api/profile
 * @name PUT /update
 */
router.put('/update', 
    [
        validatorErrors
    ],
    ProfileControllers.update);

module.exports = router;

/**
 * 
 *
 * @memberof module:api/profile
 * @name GET /filterprofiles
 */
router.get('/filterprofiles',
    [
        validatorErrors
    ],
    ProfileControllers.filterProfiles)

router.get('/:userID',
    [
        validatorErrors
    ],
    ProfileControllers.getProfile)

module.exports = router;