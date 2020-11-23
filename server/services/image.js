const db = require("../models");


/**
 * 
 * @param {Integer} userID 
 * @returns {Promise<Model>} Filter model instance  
 */

const getImages = async (userID) => {
    const images = await db.Image.findAll({
        where: {
            uploadedBy: userID
        }
    });

    return images
}

 
module.exports = {
    getImages,
} 