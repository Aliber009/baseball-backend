const express = require('express');
const { managersController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(managersController.getManagers);

module.exports = router  
