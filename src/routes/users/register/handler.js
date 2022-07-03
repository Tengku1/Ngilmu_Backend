const {
    users,
    teachers
} = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        email
    } = req.body;
    const data = await users.findOne({
        where: {
            email
        }
    });


    if (data) {
        throw new error_handler(400, "Data Duplikat !");
    }

    if (req.body.roles == "Guru") {
        const teacher = await teachers.create({
            ...req.body,
            courses: "[]",
        });
        await users.create({
            ...req.body
        });
        return res.send({
            teacher
        });
    } else {
        const user = await users.create({
            ...req.body
        });
        return res.send({
            user
        });
    }
}