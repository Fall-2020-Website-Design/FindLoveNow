const ProfileServices = require('../services/profile.js')

const update = async (req, res, next) => {
    const editData = {}
    for (const key in req.body) {
        if (req.body[key] !== undefined && req.body[key] !== null) {
            editData[key] = req.body[key];
        }
    } 
    
    try {
        const updateProfile = await ProfileServices.updateProfile(editData)
        
        res.json(updateProfile)
    }
    catch (error) {
        next(error)
        console.log(error)
    };
}

const filterProfiles = async (req, res, next) => {
    const { gender, minAge, maxAge, location, height } = req.body;
    const preferences = {
        gender,
        minAge,
        maxAge,
        location,
        height
    };

    try {
        const profiles = await ProfileServices.getFilteredProfiles(preferences);
        res.json(profiles);
    }
    catch (error) {
        next(error);
    }
}

const getProfile = async (req, res, next) => {
    const { userID } = req.params;

    try {
        const profile = await ProfileServices.getProfileByID(userID);
        res.json(profile);
    }
    catch (error) {
        next(error);
    }
}


module.exports = {
    update,
    filterProfiles,
    getProfile
}