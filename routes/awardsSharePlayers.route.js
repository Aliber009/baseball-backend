const express = require('express');
const { awardsSharePlayersController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(awardsSharePlayersController.getAwardsSharePlayers);

module.exports = router  
