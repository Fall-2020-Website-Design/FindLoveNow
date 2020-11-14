/**
 * @module api/users
 */

const express = require('express');
const router = new express.Router();
const ProfileInfoController = require('../../controllers/profileInfo.js')
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

// should match with "/api/ProfileInfo"
router.put('/updatePersonalInfo/', [validatorErrors], ProfileInfoControllers.updatePersonalInfo);

module.exports = router;