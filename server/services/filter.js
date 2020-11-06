const db = require("../models");

/**
 * 
 * @param {Integer} userID 
 * @returns {Promise<Model>} Filter model instance  
 */
const getPreferences = async (id) => {
    const preferences = await db.Filter.findByPk(id);
    return preferences;
}


/**
 * 
 * @param {Object} data - Preference data
 * @returns {Promise<Model>} Filter model instance  
 */
 
const updatePreferences = async (data) => {
    const filter = await db.Filter.update(
        {
            gender: data.gender,
            location: data.location,
            minAge: data.minAge,
            maxAge: data.maxAge,
            maxDistance: data.maxDistance,
            height: data.height,
            ethinicity: data.ethnicity
        },
        {returning: true, where: {userID: data.userID} }
    )
    
    return filter[1][0];
}

module.exports = {
    updatePreferences,
    getPreferences
} 