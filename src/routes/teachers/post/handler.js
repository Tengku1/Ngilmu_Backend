const { teachers } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const teacher = await teachers.create({
        ...req.body
    });
    if (!teacher) {
        throw new error_handler(400, "Data Gagal Ditambah");
    }

    res.send(teacher);
}