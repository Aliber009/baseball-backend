const express = require('express');
const { salariesController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(salariesController.getSalaries);

module.exports = router  
