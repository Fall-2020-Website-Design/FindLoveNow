const express = require('express');
const router = new express.Router();
const filterController = require('../../controllers/filter.js')
const {check, param, header} = require('express-validator');

/**
 * Post filter form to DB
 *
 * @memberof module:api/filter
 * @name POST /settings
 */
router.post('/preferences',
[

], filterController.preferences)

module.exports = router;