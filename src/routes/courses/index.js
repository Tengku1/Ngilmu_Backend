const get = require('./get');
const getDetail = require('./getDetail');
const post = require('./post');
const put = require('./put');
const destroy = require('./destroy');

module.exports = [
    get,
    getDetail,
    post,
    put,
    destroy
]