const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const userSchema = require('../../../schema/userSchema');

router.put('/api/users',
    validateSchema({ body: userSchema.put }),
    create_handler(handler)
);

module.exports = router;