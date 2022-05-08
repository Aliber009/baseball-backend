const express = require('express');
const { fieldingOFsplitController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(fieldingOFsplitController.getFieldingOFsplit);

module.exports = router  
