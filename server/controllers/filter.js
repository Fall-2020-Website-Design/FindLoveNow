const FilterServices = require("../services/filter.js");

/**
    @type {RequestHandler}
 */
const setPreferences =  async (req, res, next) => {
    const { gender, city, state, minAge, maxAge, feet, inches } = req.body;
    const { userID } = req.params;
    const location = `${city.toLowerCase()},${state.toLowerCase()}`;
    const height = parseInt(feet)*12 + parseInt(inches);
    
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

const firstLoginForm = async (req, res, next) => {
    const { userID, City, States, Interested } = req.body;
    const Location = `${City.toLowerCase()},${States.toLowerCase()}`;
    console.log(Location);
    const data = {
        userID,
        Location,
        Interested
    }

    try {
        const updated = await FilterServices.formUpdate(data);
        return res.json(updated);
    }
    catch (error) {
        next(error);
    }
}

module.exports = { 
    setPreferences,
    userPreferences,
    firstLoginForm
}