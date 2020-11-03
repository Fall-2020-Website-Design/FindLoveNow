const db = require("../models");

/**
 * 
 * @param {Object} data - Preference data
 * @returns {Promise<Model>} Filter model instance  
 */

const updatePreferences = async (data) => {
    const filter = await db.Filter.update(
        {
            interested: data.interested,
            location: data.location,
            minAge: data.minAge,
            maxAge: data.maxAge,
            maxDistance: data.maxDistance,
            height: data.height,
            ethinicity: data.ethinicity
        },
        {returning: true, where: {userID: data.userID} }
    )
    return filter[1][0];
}

module.exports = {
    updatePreferences
} 