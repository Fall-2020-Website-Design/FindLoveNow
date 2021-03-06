// Controllers take the request object, pull out data from request, validate, then send to service(s) 

// in this case, this is the controller for users

const UserServices = require("../services/user.js")




/**
 * @typedef {import('express').RequestHandler} RequestHandler}
 */



/**
    @type {RequestHandler}
 */
const getUserById = (req, res, next) => {
    return UserServices.findUser(req.params.userID)
        .then((user) => {
            res.json(user)
        })
        .catch(error => next(error))

}


/**
    @type {RequestHandler}
 */
const login = (req,res, next) => {
    const payload = {
        id : req.user.userID,
        name : req.user.name,
        email : req.user.email
    }
    return UserServices.getJwtToken(payload)
    .then((token) => {
        res.json({
            success : true ,
            token: 'Bearer ' + token 
        })
    })
    .catch(error => next(error))
}


/**
    @type {RequestHandler}
 */
const register = async (req,res,next) => {
    const { name , email , password } = req.body
    const hashedpassword = await UserServices.generateHash(password)
    user = {
        name,
        email,
        password: hashedpassword
    }
    try {
        const newUser = await UserServices.createUser(user)
        console.log(`controllers and this is the created user ${newUser}`)
        return res.json(newUser)
    }
    catch (error) {
        next(error)
    }
}

const getName = (req, res, next) => {
    return UserServices.findUser(req.params.userID)
        .then((user) => {
            res.json(user.name)
        })
        .catch(error => next(error))

}

const getLastLogin = (req,res,next) => {
    return UserServices.findUser(req.params.userID)
        .then((user) => {
            res.json({lastLogin: user.lastLoginTime })
        })
        .catch(error => next(error))
} 

const updateLastLogin = async (req,res,next) => {
    const { userID } = req.params
    try {
        const updatedLogin = await UserServices.updateLastLogin(userID)
        return res.json({
            "Success": true,
            updatedLogin})
        // updatedLogin[0]['lastLoginTime']
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    getUserById,
    login,
    register,
    getName,
    getLastLogin,
    updateLastLogin
}