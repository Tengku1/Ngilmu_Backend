const { subscribes } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        id
    } = req.params;

    const data = await subscribes.findOne({
        where: {
            id
        }
    });

    if (!data) {
        throw new error_handler(400, "Data Tidak Ditemukan");
    }

    const subscribe = await subscribes.destroy({
        where: {
            id
        }
    });

    if (!subscribe) {
        throw new error_handler(400, "Data Gagal Dihapus");
    }

    res.send(data);
}