const express = require('express');
const { managersHalfController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(managersHalfController.getManagersHalf);

module.exports = router  
