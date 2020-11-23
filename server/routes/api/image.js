const express = require("express");
const router = express.Router();
const uploadController = require("../../controllers/image.js");
const upload = require("../../middleware/image.js");
const validatorErrors = require("../../middleware/validatorErrors.js");


router.post("/upload/:userID", upload.single("file"), uploadController.uploadFiles);
router.get("/get/:userID", [validatorErrors], uploadController.getUserImages);



module.exports = router;