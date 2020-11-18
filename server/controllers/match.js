// Controllers take the request object, pull out data from request, validate, then send to service(s) 

// in this case, this is the controller for match

const MatchServices = require("../services/match.js");
const ProfileServices = require("../services/profile.js");
const MatchMiddleWares = require("../middleware/match.js");
const FilterServices = require("../services/filter.js")

/**
 * @typedef {import('express').RequestHandler} RequestHandler}
 */
/**
    @type {RequestHandler}
*/
const response = async (req, res, next) => {
    const { requesterID , addresseeID , status } = req.body;

    const match = {
        requesterID,
        addresseeID,
        status
    }

    try {
        const newMatch = await MatchServices.createMatch(match)
        return res.json(newMatch);
    }
    catch (error) {
        next(error);
    }
}

/**
    @type {RequestHandler}
*/
const loadPotentialMatches = async (req, res, next) => {
    const { userID } = req.params;

    try {
        const userPreferences = await FilterServices.getPreferences(userID);

        const gender1 = (userPreferences.gender === "both") ? "male": userPreferences.gender;
        const gender2 = (userPreferences.gender === "both") ? "female": userPreferences.gender;
    
        const preferences = {
            gender1,
            gender2, 
            location: userPreferences.location, 
            minAge: userPreferences.minAge, 
            maxAge: userPreferences.maxAge, 
            height: userPreferences.height
        }

        const potentialMatches = await ProfileServices.getFilteredProfiles(preferences);
        
        const usersMatches = await MatchServices.userMatches(userID);

        const result = MatchMiddleWares.retrieveProfile(userID, potentialMatches, usersMatches);

        return res.json(result);
    }
    catch (error) {
        next(error);
    }
}

/**
    @type {RequestHandler}
*/
const previousMatch = async (req, res, next) => {
    const { userID, previousID }  = req.query;

    try {
        MatchServices.deleteMatch(userID, previousID);
        const profile = await ProfileServices.getProfile(previousID);
        return res.json(profile);
    }
    catch (error) {
        next(error);
    }
}

/**
    @type {RequestHandler}
*/
const allMatches = async(req,res,next) => {
    const { userID } = req.body;

    try {
        const matches = await MatchServices.findAllMatches(userID)
        return res.json(matches);
    }
    catch(error) {
        next(error)
    }
} 

/**
    @type {RequestHandler}
*/
const userMatches = async(req, res, next) => {
    const { userID } = req.params;
    
    try {
        const matches = await MatchServices.userMatches(userID);
        return res.json(matches);
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    response,
    loadPotentialMatches,
    previousMatch,
    allMatches,
    userMatches
}
