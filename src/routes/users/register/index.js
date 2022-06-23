const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const userSchema = require('../../../schema/userSchema');

router.post('/api/register',
    validateSchema({ body: userSchema.register }),
    create_handler(handler)
);

module.exports = router;