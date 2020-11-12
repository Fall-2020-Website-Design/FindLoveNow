// In the services folder, we want to be able to query data from our database,
// in this case we will be querying data from the user 
const db = require("../models");
const filterServices = require("./filter.js");

/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} match model instance  
 */
const createMatch = async (data) => {
    const createMatch = await db.Match.create({
        requesterID : data.requesterID,
        addresseeID : data.addresseeID, 
        status : data.status
    });

    console.log(`${createMatch} has been created in the function createMatch`);

    return createMatch;
};

/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} matches model instance  
 */
const findAllMatches = async (userID) => {
    const matches = await db.Match.findAll({
        where: {
            requesterID: userID,
            status: 1
        }
    });

    return matches
}

/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} Profile model instance  
 */
const loadPotentialMatches = async (userID) => {
    const userPreferences = await filterServices.getPreferences(userID);
    // will take the users preferences and look at profile db to see if there are any other users with the preferences this user is looking for
    // after it gets the users with matching preferences it will look in the users matches to see if they have been paired up before
    // and filter out the ones that have been paired up before and return the ones that have not
    // console.log(userPreferences);
    return userPreferences;
}

module.exports = {
    createMatch,
    findAllMatches,
    loadPotentialMatches
} 