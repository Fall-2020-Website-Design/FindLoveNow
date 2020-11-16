/**
 * @module api/profile
 */

const express = require('express');
const router = new express.Router();
const ProfileControllers = require('../../controllers/profile.js')
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

// should match with "/api/ProfileInfo"
router.put('/update', 
    [
        validatorErrors
    ],
    ProfileControllers.update);

module.exports = router;