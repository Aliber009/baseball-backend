const express = require('express');
const { appearancesController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(appearancesController.getAppearances);

module.exports = router  
