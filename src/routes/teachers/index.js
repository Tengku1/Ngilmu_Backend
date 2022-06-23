const getAll = require('./getAll');
const post = require('./post');
const put = require('./put');
const destroy = require('./destroy');

module.exports = [
    getAll,
    post,
    put,
    destroy
]