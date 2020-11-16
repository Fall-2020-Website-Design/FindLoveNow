const express = require('express');
const router = new express.Router();
const userRoutes = require('./user.js')
const filterRoutes = require('./filter.js')
const matchRoutes = require('./match.js')
const messageRoutes = require('./message.js')
<<<<<<< HEAD
const formRoutes = require('./profileInfo.js')
=======
const profileRoutes = require('./profile.js')
>>>>>>> 008bfcb0f5dd50b561d9976e0488058cf471e981

// sanity check to make sure routes are working properly


router.use('/users',userRoutes)
router.use('/filter', filterRoutes)
router.use('/match', matchRoutes)
router.use('/message', messageRoutes)
<<<<<<< HEAD
router.use('/form', formRoutes)
=======
router.use('/profile', profileRoutes)
>>>>>>> 008bfcb0f5dd50b561d9976e0488058cf471e981

router.use('/helloworld', (req, res, next) => {
    res.status(200).send('hello world');
  });


router.use('*', (req, res, next) => {
    res.status(404).json({ errors: [{ msg: 'Unknown API route' }] });
  });


module.exports = router;

