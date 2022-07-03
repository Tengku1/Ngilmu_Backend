const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const coursesSchema = require('../../../schema/coursesSchema');

router.put('/api/courses/:id',
    validateSchema({ body: coursesSchema.put }),
    create_handler(handler)
);

module.exports = router;