const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler } = require('../../../utils');

router.get('/api/teacher',
    create_handler(handler)
);

module.exports = router;