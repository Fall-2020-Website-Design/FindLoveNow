// In the services folder, we want to be able to query data from our database,
// in this case we will be querying data from the user 
const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_OPTIONS = {
    expiresIn: 31556926,
};
const secretOrPrivateKey = 'secret';


//setup for authentication
const getJwtToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, JWT_OPTIONS, (err, token) => {
            return err ? reject(err) : resolve(token);
        });
    });
};

//setup for authentication
const verifyJwtToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretOrPrivateKey, (err, decoded) => {
            return err ? reject(err) : resolve(decoded);
        });
    });
};


/**
 * 
 * @param {String} email 
 * @returns {Promise<Model>} User model instance  
 */
const findUserByEmail = async (email) => {
    const User = await db.User.findOne({ where: { email: email } })
    return User
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Model>} User model instance  
 */
const findUser = async (id) => {
    const User = await db.User.findByPk(id);
    console.log(User + ' has been found by service');
    return User;
}


/**
 * 
 * @param {Object} data - User data
 * @returns {Promise<Model>} User model instance  
 */
const createUser = async (data) => {
    const newUser = await db.User.create( {
        name : data.name,
        email : data.email, 
        password : data.password
    })
    
    const id = await findUserByEmail(data.email)

    // when user is created userID is added to Match table
    const newMatch = await db.Match.create({
        userID: id.dataValues.userID
    })

    // when user is created userID is added to Profile table
    const newProfile = await db.Profile.create({
        userID: id.dataValues.userID
    })

    // when user is created userID is added to Filter table
    const newFilter = await db.Filter.create({
        userID: id.dataValues.userID
    })

    console.log(`${newUser} has been created in the function createUser`)

    return newUser
}

/**
 * 
 * @param {String} password 
 * @returns {String} hash value 
 */
const generateHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};



module.exports = {
    getJwtToken,
    verifyJwtToken,
    findUserByEmail,
    findUser,
    createUser,
    generateHash
} 