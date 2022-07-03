const { courses, teachers } = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {

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

    const course = await courses.create({
        ...req.body
    });

    teacherCourses.push(course.id);

    await teachers.update({
        courses: `[${teacherCourses}]`
    }, {
        where: {
            id: req.body.teacherId
        }
    });

    if (!course) {
        throw new error_handler(400, "Data Gagal Ditambah");
    }

    res.send("aa");
}