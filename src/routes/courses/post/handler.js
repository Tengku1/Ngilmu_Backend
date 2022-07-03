const { courses, teachers } = require('../../../models');
const ErrorHandler = require('../../../utils/error_handler');

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

    let teacherCourses = rawTeacherCourses == "" ? rawTeacherCourses.split("") : rawTeacherCourses.split(",");

    const course = await courses.create({
        ...req.body
    });

    teacherCourses.push(`${course.id}`);

    console.log(teacherCourses);

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

    res.send(teacherCourses);
}