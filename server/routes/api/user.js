/**
 * @module api/users
 */

const express = require('express');
const router = new express.Router();
const userController = require('../../controllers/users.js')
const userMiddleware = require('../../middleware/user.js')
const validatorErrors = require('../../middleware/validatorErrors');
const {check, param, header} = require('express-validator');

/**
 * Register user
 *
 * @memberof module:api/users
 * @name POST /register
 */
router.post('/register',[
    check('name',"Name must only contain letters")
    .isLength( {min : 1 })
    .matches(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    ),
    check('email', "Email input field required")
    .isEmail()
    .bail()
    .custom(userMiddleware.emailShouldExist(false)),
    check('password', "Password input field required")
    .isLength({min : 5}).withMessage('Password must be at least 5 characters long')
    .custom(userMiddleware.confirmPassword),
    validatorErrors
], userController.register)


/**
 * Login user and return JWT token
 *
 * @memberof module:api/users
 * @name POST /login
 */
router.post('/login',
    [
        check('email', "Email input field required")
        .isEmail().withMessage('Not a valid Email')
        .bail() 
        .custom(userMiddleware.emailShouldExist(true)),
        check('password',"Password input field required")
        .bail()
        .custom(userMiddleware.passwordMatchesHash),
        validatorErrors
    ]
, userController.login)

router.get('/:userID', [validatorErrors], userController.getName)
router.get('/lastLogin/:userID', [validatorErrors], 
userController.getLastLogin)

router.put('/updateLoginTime/:userID', [validatorErrors], 
userController.updateLastLogin)


module.exports = router;