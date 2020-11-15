// Controllers take the request object, pull out data from request, validate, then send to service(s) 

// in this case, this is the controller for match

const MatchServices = require("../services/match.js");
const ProfileServices = require("../services/profile.js");

/**
 * @typedef {import('express').RequestHandler} RequestHandler}
 */
/**
    @type {RequestHandler}
*/
const reponse = async (req, res, next) => {
    const { requesterID , addresseeID , status } = req.body;

    match = {
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
    const { userID } = req.body;
    try {
        const matches = await MatchServices.loadPotentialMatches(userID)
        return res.json(matches);
    }
    catch (error) {
        next(error);
    }
}

/**
    @type {RequestHandler}
*/
const previousMatch = async (req, res, next) => {
    const { previousUserID } = req.body;
    try {
        const profile = await ProfileServices.getProfile(previousUserID);
        return res.json(profile);
    }
    catch (error) {
        next(error);
    }
}


module.exports = {
    reponse,
    loadPotentialMatches,
    previousMatch
}
