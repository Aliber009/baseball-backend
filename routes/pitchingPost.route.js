const express = require('express');
const { pitchingPostController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(pitchingPostController.getPitchingPost);

module.exports = router  
