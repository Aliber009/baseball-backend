const express = require('express');
const { fieldingController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(fieldingController.getFielding);

module.exports = router  
