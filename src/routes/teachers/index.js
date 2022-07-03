const getAll = require('./getAll');
const getCourses = require('./getCourses');
const put = require('./put');
const destroy = require('./destroy');

module.exports = [
    getAll,
    put,
    getCourses,
    destroy
]