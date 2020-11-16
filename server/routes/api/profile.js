/**
 * @module api/profile
 */

const express = require('express');
const router = new express.Router();
const ProfileControllers = require('../../controllers/profile.js')
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

// should match with "/api/ProfileInfo"
<<<<<<< HEAD:server/routes/api/profileInfo.js
router.put('/updatePersonalInfo', [validatorErrors], ProfileInfoController.updatePersonalInfo);
=======
router.put('/update', 
    [
        validatorErrors
    ],
    ProfileControllers.update);
>>>>>>> 008bfcb0f5dd50b561d9976e0488058cf471e981:server/routes/api/profile.js

module.exports = router;