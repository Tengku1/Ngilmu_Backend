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

    var rawTeacherCourses = teacher['courses'];
    rawTeacherCourses = rawTeacherCourses.replace(']', '');
    rawTeacherCourses = rawTeacherCourses.replace('[', '');

    if (rawTeacherCourses.length == 0) {
        const courses = await sequelize.query(`select * from courses where id in ("null")`, {
            type: Sequelize.QueryTypes.SELECT
        });
        res.send(courses);
    } else {
        const courses = await sequelize.query(`select * from courses where id in (${rawTeacherCourses})`, {
            type: Sequelize.QueryTypes.SELECT
        });
        res.send(courses);
    }
}