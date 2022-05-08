const express = require('express');
const { fieldingPostController } = require('../Controllers')

const router = express.Router();

router
  .route('/')
  .get(fieldingPostController.getFieldingPost);

module.exports = router  
