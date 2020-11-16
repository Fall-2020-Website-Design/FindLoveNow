// Controllers take the request object, pull out data from request, validate, then send to service(s)

// in this case, this is the controller for profile information.

const ProfileInfoServices = require('../services/profileinfo.js')

const updatePersonalInfo = (req, res, next) => {
    const {userID, Gender, Age, Location, Height} = req.body;
    const data = {userID, Gender, Age, Location, Height};
    return ProfileInfoServices.updatePersonalInfo(data)
    .then((data) => {
        res.json(data)
    })
    .catch(error => next(error))
}


module.exports = {
    updatePersonalInfo
    
}
