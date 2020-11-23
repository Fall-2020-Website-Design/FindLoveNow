const ProfileServices = require('../services/profile.js')

const update = (req, res, next) => {
    const {userID, Gender, Age, Location, Height} = req.body;
    const data = {userID, Gender, Age, Location, Height};
    console.log(data)
    return ProfileServices.updateProfile(data)
    .then((data) => {
        res.json(data)
    })
    .catch(error => next(error))
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