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

/**
 * @param {Object} data - user Preferences
 * @returns {Promise<Model>} Profile model instances that meets that users Preferences  
 */
const getFilteredProfiles = async (data) => {
    const profiles = await db.Profile.findAll({
        where: {
            Gender: data.gender,
            Location: data.location,
            Age: {
                [Op.and]: {[Op.gte]: data.minAge, 
                            [Op.lte]: data.maxAge}
            },
            Height: {
                [Op.gte]: data.height
            }
        }
    })
    console.log(profiles)
    return profiles;
}


module.exports = {
    getProfile,
    getFilteredProfiles
}