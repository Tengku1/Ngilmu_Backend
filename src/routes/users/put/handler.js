const {
    sequelize,
    users
} = require('../../../models');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        id
    } = req.body;
    const data = await users.findOne({
        where: {
            id
        }
    });
    if (!data) {
        throw new error_handler(400, "Data Tidak Ditemukan");
    }

    const user = await users.update({
        ...req.body
    }, {
        where: {
            id
        }
    });

    return res.send(user);
}