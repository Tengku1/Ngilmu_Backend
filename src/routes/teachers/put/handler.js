const { teachers } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        id
    } = req.body;

    const data = await teachers.findOne({
        where: {
            id
        }
    });

    if (!data) {
        throw new error_handler(400, "Data Tidak Ditemukan");
    }

    const teacher = await teachers.update({
        ...req.body
    }, {
        where: {
            id
        }
    });

    if (!teacher) {
        throw new error_handler(400, "Data Gagal Di-update");
    }

    res.send(data);
}