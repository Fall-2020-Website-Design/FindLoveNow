
const db = require("../models");
const { Op } = require("sequelize");
const filterServices = require("./filter.js");

/**
 * @param {Object} data 
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
 * Finds all your matches
 * @param {Integer} userID 
 * @returns {Promise<Model>} matches model instance  
 */
const findAllMatches = async (userID) => {
    const matches = await db.Match.findAll({
        where: {
            [Op.or]: [
             {requesterID: userID },
             { addresseeID: userID},
             { status: 1 }
            ]
        }
    });

    return matches
}

/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} Match model instances of a user
 */
const userMatches = async (userID) => {
    
    const matches = await db.Match.findAll({
        where: {
            requesterID: userID
        }
    })

    return matches;
}

/**
 * @param {Integer} userID 
 * @returns {Promise<Model>} Match model instances of a user
 */
const deleteMatch = async (userID, prevID) => {
    await db.Match.destroy({
        where: {
            requesterID: userID,
            addresseeID: prevID
        }
    })
}

module.exports = {
    createMatch,
    findAllMatches,
    userMatches,
    deleteMatch
}