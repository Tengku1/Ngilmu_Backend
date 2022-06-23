const { subscribes } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const subscribe = await subscribes.create({
        ...req.body
    });
    if (!subscribe) {
        throw new error_handler(400, "Data Gagal Ditambah");
    }

    res.send(subscribe);
}