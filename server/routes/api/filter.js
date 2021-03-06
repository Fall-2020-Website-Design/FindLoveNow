const express = require('express');
const router = new express.Router();
const filterController = require('../../controllers/filter.js');
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

/**
 * Post filter form to DB
 *
 * @memberof module:api/filter
 * @name PUT /update
 */
router.put('/update/:userID',
    [
        check('gender',"Gender input field required")
        .isLength( {min : 1 } ),
        check('city', "City input field required")
        .isLength( {min : 1 } ),
        check('state', "State input field required")
        .isLength( {min : 1 } ),
        check('minAge', "Min Age input field required")
        .isLength( {min : 1 } ),
        check('maxAge', "Max Age input field required")
        .isLength( {min : 1 } ),
        check('feet', "Height input field required")
        .isLength( {min : 1 } ),
        check('inches', "Height input field required")
        .isLength( {min : 1 } ),
        validatorErrors
    ], 
    filterController.setPreferences)

/**
* Post filter form to DB
*
* @memberof module:api/filter
* @name GET /:userID
*/
router.get('/get/:userID', 
    [
        validatorErrors
    ],
    filterController.userPreferences)


/**
* Post filter form to DB
*
* @memberof module:api/filter
* @name PUT /:userID
*/
router.put('/form', 
    [
        validatorErrors
    ],
    filterController.firstLoginForm)

module.exports = router;