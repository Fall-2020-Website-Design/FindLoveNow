/**
 * @module api/profile
 */

const express = require('express');
const router = new express.Router();
const ProfileControllers = require('../../controllers/profile.js')
const validatorErrors = require('../../middleware/validatorErrors');
const { check, param, header } = require('express-validator');

/**
 * 
 *
 * @memberof module:api/profile
 * @name PUT /update
 */
router.put('/update',
    [
        check('Gender', "Gender input field required")
            .isLength({ min: 1 }),
        check('City', "City input field required")
            .isLength({ min: 1 }),
        check('States', "State input field required")
            .isLength({ min: 1 }),
        check('Phrase', "Phrase input field required")
            .isLength({ min: 1 }),
        check('Height', "Height input field required")
            .isLength({ min: 1 }),
        check('Interested', "Interested input field required")
            .isLength({ min: 1 }),
        validatorErrors
    ],
    ProfileControllers.update);

/**
 * 
 *
 * @memberof module:api/profile
 * @name GET /filtered
 */
router.get('/filtered',
    [
        validatorErrors
    ],
    ProfileControllers.filterProfiles)

/**
 * 
 *
 * @memberof module:api/profile
 * @name GET /:userID
 */
router.get('/:userID',
    [
        validatorErrors
    ],
    ProfileControllers.getProfile)


module.exports = router;