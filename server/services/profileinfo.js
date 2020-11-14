const db = require("../models");

/**
 * 
 * @param {Integer} userID 
 * @returns {Promise<Model>} Filter model instance  
 */

const updatePersonalInfo = async (data) => {
    const personalInfo = await db.Profile.update(
        {
            Age: data.Age,
            Gender: data.Gender,
            Location: data.Location,
            Interested: data.Interested,
            Height: data.Height,
            Education: data.Education,
            Hobby: data.Hobby,
            Work: data.Work,
            Phrase: data.Phrase,
        },
        {returning: true, where: {userID: data.userID} }
    )
    console.log('update form')
}

module.exports = {
    updatePersonalInfo
} 