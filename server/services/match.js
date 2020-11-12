// In the services folder, we want to be able to query data from our database,
// in this case we will be querying data from the user 
const db = require("../models");

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



module.exports = {
    createMatch,
    findAllMatches
} 