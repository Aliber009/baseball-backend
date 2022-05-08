const express = require('express');
const { pitchingController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(pitchingController.getPitching);

module.exports = router  
