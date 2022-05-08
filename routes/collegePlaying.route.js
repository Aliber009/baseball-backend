const express = require('express');
const { collegePlayingController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(collegePlayingController.getCollegePlaying);

module.exports = router  
