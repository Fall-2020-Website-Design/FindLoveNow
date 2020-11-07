const FilterServices = require("../services/filter.js");


/**
    @type {RequestHandler}
 */
const preferences =  async (req, res, next) => {
    return FilterServices.updatePreferences(req.body)
        .then((filter) => {
            res.json(filter)
        })
        .catch(error => next(error))
}

module.exports = { 
    preferences
}