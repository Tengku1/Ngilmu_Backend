const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const subscribesSchema = require('../../../schema/subscribesSchema');

router.delete('/api/subscribes/:id',
    validateSchema({ params: subscribesSchema.destroy }),
    create_handler(handler)
);

module.exports = router;