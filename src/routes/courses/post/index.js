const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const coursesSchema = require('../../../schema/coursesSchema');

router.post('/api/courses',
    validateSchema({ body: coursesSchema.post }),
    create_handler(handler)
);

module.exports = router;