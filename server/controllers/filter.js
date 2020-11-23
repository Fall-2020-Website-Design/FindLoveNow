const FilterServices = require("../services/filter.js");


/**
    @type {RequestHandler}
 */
const setPreferences =  async (req, res, next) => {
    const { gender, location, minAge, maxAge, height } = req.body;
    const { userID } = req.params;
    
    const preferences = { 
        userID, 
        gender, 
        location, 
        minAge, 
        maxAge, 
        height 
    };
    
    return FilterServices.updatePreferences(preferences)
        .then((filter) => {
            res.json(filter)
        })
        .catch(error => next(error))
}

const userPreferences = async (req, res, next) => {
    const { userID } = req.params;

    try {
        const preferences = await FilterServices.getPreferences(userID);
        return res.json(preferences);
    }
    catch (error) {
        next(error);
    }
}

module.exports = { 
    setPreferences,
    userPreferences
}