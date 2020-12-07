const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const imageController = require("../../controllers/image.js");
const upload = require("../../middleware/image.js");
const validatorErrors = require("../../middleware/validatorErrors.js");

/**
 * 
 * @memberof module:api/image
 * @name POST /upload/:userID
 *
 */
router.post("/upload/:userID",
    [
        check('file'),
        validatorErrors, upload.single("file")
    ], imageController.uploadFiles);
router.get("/get/:userID", [validatorErrors], imageController.getUserImages);


/**
 * 
 * @memberof module:api/image
 * @name POST /delete/:imageID
 *
 */
router.delete("/delete/:imageID",
    [
        validatorErrors
    ], 
    imageController.deleteImage
);

module.exports = router;