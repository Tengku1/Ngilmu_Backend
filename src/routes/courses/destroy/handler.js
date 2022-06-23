const { courses } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        id
    } = req.params;

    const data = await courses.findOne({
        where: {
            id
        }
    });

    if (!data) {
        throw new error_handler(400, "Data Tidak Ditemukan");
    }

    const course = await courses.destroy({
        where: {
            id
        }
    });

    if (!course) {
        throw new error_handler(400, "Data Gagal Dihapus");
    }

    res.send(data);
}