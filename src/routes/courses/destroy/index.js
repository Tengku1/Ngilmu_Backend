const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const coursesSchema = require('../../../schema/coursesSchema');

router.delete('/api/courses/:id',
    validateSchema({ params: coursesSchema.destroy }),
    create_handler(handler)
);

module.exports = router;