const {
    users
} = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        username,
        password
    } = req.body;
    const data = await users.findOne({
        where: {
            username,
            password
        }
    });

    if (data) {
        throw new error_handler(400, "Data Duplikat !");
    }

    const user = await users.create({
        ...req.body
    });

    return res.send({
        user
    });
}