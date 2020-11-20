const express = require("express");
const router = express.Router();
const uploadController = require("../../controllers/image.js");
const upload = require("../../middleware/image.js");


router.post("/upload", upload.single("file"), uploadController.uploadFiles);


module.exports = router;