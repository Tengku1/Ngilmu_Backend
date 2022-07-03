const { sequelize, teachers } = require('../../../models');
const Sequelize = require('sequelize');
const courses = require('../../../models/courses');
const ErrorHandler = require('../../../utils/error_handler');

module.exports = async (req, res) => {

    const teacher = await teachers.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['courses']
    });

    if (!teacher) {
        throw new ErrorHandler(400, 'Data Guru Tidak Ditemukan!');
    }

    let id = teacher['courses'];
    id = id.replace(']', '');
    id = id.replace('[', '');

    const courses = await sequelize.query(`select * from courses where id in (${id})`, {
        type: Sequelize.QueryTypes.SELECT
    });

    res.send(courses);
}