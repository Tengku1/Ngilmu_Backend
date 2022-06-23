const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const userSchema = require('../../../schema/userSchema');

router.post('/api/login',
    validateSchema({ body: userSchema.login }),
    create_handler(handler)
);

module.exports = router;