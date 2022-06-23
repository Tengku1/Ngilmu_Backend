const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const subscribesSchema = require('../../../schema/subscribesSchema');

router.put('/api/subscribes',
    validateSchema({ body: subscribesSchema.put }),
    create_handler(handler)
);

module.exports = router;