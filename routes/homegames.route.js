const express = require('express');
const { homegamesController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(homegamesController.getHomeGames);

module.exports = router  
