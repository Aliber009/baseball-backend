const express = require('express');
const { schoolsController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(schoolsController.getSchools);

module.exports = router  
