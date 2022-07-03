const { courses, teachers } = require('../../../models');
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

    const teacher = await teachers.findOne({
        where: {
            id: req.body.teacherId
        },
        attributes: ['courses']
    });

    if (!teacher) {
        throw new ErrorHandler(400, 'Data Guru Tidak Ditemukan!');
    }

    let rawTeacherCourses = teacher['courses'];
    rawTeacherCourses = rawTeacherCourses.replace(']', '');
    rawTeacherCourses = rawTeacherCourses.replace('[', '');

    let teacherCourses = rawTeacherCourses.split(",");
    teacherCourses.pop();

    await teachers.update({
        "courses": `[${teacherCourses}]`
    }, {
        where: {
            id: req.body.teacherId
        }
    });

    res.send(course);
}