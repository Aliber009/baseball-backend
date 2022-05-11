const express = require('express');
const { peopleController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(peopleController.getPeople);
router
  .route('/sorted')
  .get(peopleController.getSortedPeople);

module.exports = router  
