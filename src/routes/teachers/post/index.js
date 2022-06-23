const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const teacherSchema = require('../../../schema/teacherSchema');

router.post('/api/teacher',
    validateSchema({ body: teacherSchema.post }),
    create_handler(handler)
);

module.exports = router;