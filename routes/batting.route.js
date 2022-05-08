const express = require('express');
const { battingController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(battingController.getBatting);

module.exports = router  
