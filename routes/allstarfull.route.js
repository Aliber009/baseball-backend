const express = require('express');
const { allstarfullController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(allstarfullController.getAllstarfull);

module.exports = router  
