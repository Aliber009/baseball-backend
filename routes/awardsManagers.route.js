const express = require('express');
const { awardsManagersController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(awardsManagersController.getAwardsManagers);

module.exports = router  
