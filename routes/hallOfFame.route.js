const express = require('express');
const { hallOfFameController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(hallOfFameController.getHallOfFame);

module.exports = router  
