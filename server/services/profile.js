const db = require("../models");

/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} Profile model instance  
 */
const getProfile = async (userID) => {
    const profile = await db.Profile.findByPk(userID);
    console.log(profile)
    return profile;
}


module.exports = {
    getProfile,
}