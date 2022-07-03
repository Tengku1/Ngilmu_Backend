const { courses, teachers } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        params: {
            id
        }
    } = req;

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
            id: req.params.id
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

    console.log(teacher);

    let rawTeacherCourses = teacher['courses'];
    rawTeacherCourses = rawTeacherCourses.replace(']', '');
    rawTeacherCourses = rawTeacherCourses.replace('[', '');

    let teacherCourses = rawTeacherCourses.split(",");
    let teacherCoursesIndex = teacherCourses.indexOf(id);
    teacherCourses.splice(teacherCoursesIndex, 1);

    await teachers.update({
        "courses": `[${teacherCourses}]`
    }, {
        where: {
            id: req.body.teacherId
        }
    });

    res.send(course);
}