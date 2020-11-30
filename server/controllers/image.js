const fs = require("fs");
const ImageServices = require("../services/image.js");
const db = require("../models");
const Image = db.Image;

const uploadFiles = async (req, res) => {
  try {
    const { userID } = req.params;

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      uploadedBy: userID,
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/temp/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

const getUserImages = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const images = await ImageServices.getImages(userID);
    return res.json(images);
  }
  catch (error) {
    next(error);
  }
}

const deleteImage =  async (req, res, next) => {
  const { imageID } = req.params;

  try {
    await ImageServices.deleteImageByID(imageID)
    return res.json("Success")
  } 
  catch (error) {
    next(error);
  }
}

module.exports = {
  uploadFiles,
  getUserImages,
  deleteImage
};