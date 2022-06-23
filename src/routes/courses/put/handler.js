const { courses } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        id
    } = req.body;

    const data = await courses.findOne({
        where: {
            id
        }
    });

    if (!data) {
        throw new error_handler(400, "Data Tidak Ditemukan");
    }

    const course = await courses.update({
        ...req.body
    }, {
        where: {
            id
        }
    });

    if (!course) {
        throw new error_handler(400, "Data Gagal Di-update");
    }

    res.send(data);
}