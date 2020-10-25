const express = require('express');
const router = new express.Router();
const userRoutes = require('./user.js')


// sanity check to make sure routes are working properly


router.use('/users',userRoutes)

router.use('/helloworld', (req, res, next) => {
    res.status(200).send('hello world');
  });

  router.use('/sonarcloud', (req, res, next) => {
    res.status(200).send('SonarCloud PR');
  });

router.use('*', (req, res, next) => {
    res.status(404).json({ errors: [{ msg: 'Unknown API route' }] });
  });


module.exports = router;