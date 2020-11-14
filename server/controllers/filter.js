const FilterServices = require("../services/filter.js");


/**
    @type {RequestHandler}
 */
const preferences =  async (req, res, next) => {
    const { userID, gender, location, minAge, maxAge, height } = req.body;
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

module.exports = { 
    preferences
}