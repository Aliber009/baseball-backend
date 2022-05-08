const express = require('express');
const { fieldingOFController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(fieldingOFController.getFieldingOF);

module.exports = router  
