const express = require('express');
const { seriesPostController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(seriesPostController.getSeriesPost);

module.exports = router  
