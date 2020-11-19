const express = require('express');
const router = new express.Router();
const filterController = require('../../controllers/filter.js');
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

/**
 * Post filter form to DB
 *
 * @memberof module:api/filter
 * @name PUT /preferences
 */
router.put('/preferences',
[
    check('gender',"Gender input field required")
    .isLength( {min : 1 } ),
    check('location', "Location input field required")
    .isLength( {min : 1 } ),
    check('minAge', "Min Age input field required")
    .isLength( {min : 1 } ),
    check('maxAge', "Max Age input field required")
    .isLength( {min : 1 } ),
    check('height', "Height input field required")
    .isLength( {min : 1 } ),
    validatorErrors
], filterController.setPreferences)

/**
* Post filter form to DB
*
* @memberof module:api/filter
* @name GET /:userID
*/
router.get('/:userID', 
    [
        validatorErrors
    ],
    filterController.userPreferences)

module.exports = router;