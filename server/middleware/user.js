const userServices = require('../services/user.js');
const bcrypt = require('bcrypt');


/**
 * 
 * @type {ExpressValidator} 
 * 
 */
const attachDecodedToken = async (value, {req}) => {
    const splitted = value.split(' ');
    if (splitted.length !== 2) {
      throw new Error('Malformed authorization header');
    }
    if (splitted[0].toLowerCase() !== 'bearer') {
      throw new Error('Incorrect authorization type (Must be Bearer)');
    }
    // This returns the same payload that userServices.getJwtToken accepts
    const decoded = await userServices.verifyJwtToken(splitted[1]);
    req.jwtDecoded = decoded;
    return true;
  }


  /**
   * @param {boolean} shouldExist - Whether the validation should assert
   *     if the email exists, or if it does not exist
   * @returns {ExpressValidator} - The express-validator function
   */

  // this function asserts if the email should exist or not
  // NOTE we also have access to the current user information  
  // based on the email. Thus req.user contains the user information.
  const emailShouldExist = (shouldExist) => async(value, {req}) => {
    const user = await userServices.findUserByEmail(value);
    if (shouldExist && !user) {
      throw new Error("Email not found")
    }
    if (!shouldExist && user) {
      throw new Error("Email already exist")
    }
    if (user) {
      req.user = user
    }
    return true 
  }


/**
 * 
 * @type {ExpressValidator} 
 * 
 */

  const passwordMatchesHash = async (value, {req}) => {
    const match = await bcrypt.compare(value, req.user.password)
    if (!match) {
      return false 
    }
    return true  
  }

/**
 * 
 * @type {ExpressValidator} 
 * 
 */
  const confirmPassword = async(value, {req}) => {
    if (value !== req.body.password2) {
      throw new Error('Password confirmation does not match password') 
      }
    return true
  }

  module.exports = {
      attachDecodedToken,
      emailShouldExist,
      passwordMatchesHash,
      confirmPassword
  } 