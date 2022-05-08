const express = require('express');
const { teamsController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(teamsController.getTeams);

module.exports = router  
