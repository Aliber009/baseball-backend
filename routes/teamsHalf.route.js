const express = require('express');
const { teamsHalfController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(teamsHalfController.getTeamsHalf);

module.exports = router  
