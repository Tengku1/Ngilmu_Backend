const express = require('express');
const router = express.Router();
const handler = require('./handler');
const { create_handler, validateSchema } = require('../../../utils');
const teacherSchema = require('../../../schema/teacherSchema');

router.put('/api/teacher',
    validateSchema({ body: teacherSchema.put }),
    create_handler(handler)
);

module.exports = router;