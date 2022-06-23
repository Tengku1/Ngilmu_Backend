const {
    users
} = require('../../../models');
const { error_handler } = require('../../../utils');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    const {
        username,
        password
    } = req.body;
    const user = await users.findOne({
        where: {
            username,
            password
        }
    });

    if (!user) {
        throw new error_handler(400, "Data tidak ditemukan");
    }

    const token = jwt.sign({
        id: user['id'],
        username: user['username'],
        address: user['address'],
        roles: user['roles']
    }, process.env.SECRET_KEY);

    return res.send({
        user,
        token
    });
}