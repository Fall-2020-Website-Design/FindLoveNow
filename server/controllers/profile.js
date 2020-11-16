const ProfileServices = require('../services/profile.js')

const update = (req, res, next) => {
    const {userID, Gender, Age, Location, Height} = req.body;
    const data = {userID, Gender, Age, Location, Height};
    return ProfileServices.updateProfile(data)
    .then((data) => {
        res.json(data)
    })
    .catch(error => next(error))
}


module.exports = {
    update 
}