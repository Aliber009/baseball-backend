const express = require('express');
const { battingPostController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(battingPostController.getBattingPost);

module.exports = router  
