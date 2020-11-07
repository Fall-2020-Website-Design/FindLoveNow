const express = require('express');
const router = new express.Router();
const filterController = require('../../controllers/filter.js');
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

/**
 * Post filter form to DB
 *
 * @memberof module:api/filter
 * @name POST /settings
 */
router.post('/preferences',
[
    check('gender',"Gender input field required")
    .isLength( {min : 1 } ),
    check('location', "Location input field required")
    .isLength( {min : 1 } ),
    check('minAge', "Min Age input field required")
    .isLength( {min : 1 } ),
    check('maxAge', "Max Age input field required")
    .isLength( {min : 1 } ),
    check('distance', "Distance input field required")
    .isLength( {min : 1 } ),
    check('height', "Height input field required")
    .isLength( {min : 1 } ),
    check('ethnicity', "Ethnicity input field required")
    .isLength( {min : 1 } ),
    validatorErrors
], filterController.preferences)

module.exports = router;