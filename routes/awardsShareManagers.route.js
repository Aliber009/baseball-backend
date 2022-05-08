const express = require('express');
const { awardsShareManagersController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(awardsShareManagersController.getAwardsShareManagers);

module.exports = router  
