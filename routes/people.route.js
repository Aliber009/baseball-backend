const express = require('express');
const { peopleController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(peopleController.getPeople);

module.exports = router  
