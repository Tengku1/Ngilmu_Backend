const { courses } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const course = await courses.create({
        ...req.body
    });
    if (!course) {
        throw new error_handler(400, "Data Gagal Ditambah");
    }

    res.send(course);
}