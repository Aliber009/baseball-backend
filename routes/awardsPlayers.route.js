const express = require('express');
const { awardsPlayersController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(awardsPlayersController.getAwardsPlayers);

module.exports = router  
