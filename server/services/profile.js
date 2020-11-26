const db = require("../models");
const { Op } = require("sequelize");

/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} Profile model instance  
 */
const getProfile = async (userID) => {
    const profile = await db.Profile.findByPk(userID);
 
    return profile;
}

/**
 * @param {Object} data - user Preferences
 * @returns {Promise<Model>} Profile model instances that meets that users Preferences  
 */
const getFilteredProfiles = async (data) => {
    const profiles = await db.Profile.findAll({
        where: {
            [Op.or]: [
                { Gender: data.gender1},
                { Gender: data.gender2}
            ],
            Location: data.location,
            Age: {
                [Op.and]: {
                    [Op.gte]: data.minAge, 
                    [Op.lte]: data.maxAge
                }
            },
            Height: {
                [Op.gte]: data.height
            }
        }
    })

    return profiles;
}


/**
 * 
 * @param {Object} data 
 * @returns {Promise<Model>} Profile model instance  
 */
const updateProfile = async (data) => {
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


const getProfileByID = async (id) => {
    const profile = await db.Profile.findByPk(id);
    return profile.dataValues;
}


module.exports = {
    getProfile,
    getFilteredProfiles,
    updateProfile,
    getProfileByID
}